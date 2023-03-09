import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { createClient as createManClient } from 'contentful-management';

import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  client: any;
  manClient: any;
  articles: BehaviorSubject<any> = new BehaviorSubject([]);
  articleTypes: BehaviorSubject<any> = new BehaviorSubject([]);
  buTypes: BehaviorSubject<any> = new BehaviorSubject([]);
  detailsTypes: BehaviorSubject<any> = new BehaviorSubject([]);
  toolsTypes: BehaviorSubject<any> = new BehaviorSubject([]);
  bestPractices: BehaviorSubject<any> = new BehaviorSubject([]);
  staticPages: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {
    this.client = createClient({
      space: environment.contentfulSpaceID,
      accessToken: environment.contentfulAccessToken,
    });
    this.manClient = createManClient({
      accessToken: environment.contentfulManAccessToken,
    });
    // this.preload();
  }

  public preload() {
    return new Promise(resolve => {
      Promise.all([
        this.fetchEntriesForContentType('buType'),
        this.fetchEntriesForContentType('detailsType'),
        this.fetchEntriesForContentType('toolsType'),
        this.fetchEntriesForContentType('articleType'),
        this.fetchEntriesForContentType('bestPractice'),
        this.fetchEntriesForContentType('article'),
        this.fetchEntriesForContentType('staticPages'),
      ]).then(results => {
        const buTypes = results[0];
        const detailsTypes = results[1];
        const toolsTypes = results[2];
        const articleTypes = results[3];
        const bestPractices = results[4];
        const staticPages = results[6];
        const articles = (results[5] || [])
          .map((article) => {
            article.category = articleTypes.filter(category => category.sys.id === article.fields.articleCategory.sys.id)[0];
            return article;
          })
          .sort((first, next) => {
            return first.fields.articleOrder - next.fields.articleOrder;
          })
          .sort((first, next) => {
            return first.category.fields.weight - next.category.fields.weight;
          })
          .map((article, index, array) => {
            if (array[index + 1]) {
              if (array[index + 1].category.sys.id === article.category.sys.id) {
                article.nextArticleLink = `/article/${array[index + 1].sys.id}`;
              } else {
                article.nextCategoryLink = `/category/${array[index + 1].category.sys.id}`;
              }
            }
            return article;
          });
   //      console.log('static:', staticPages);
   //     console.log(`[ContentService] articles loaded:
  //        ${articleTypes.length}, ${articles.length},
  //        ${buTypes.length}, ${detailsTypes.length}, ${toolsTypes.length},
   //       ${bestPractices.length}
  //      `);
        this.articles.next(articles);
        this.articleTypes.next(articleTypes);
        this.buTypes.next(buTypes);
        this.detailsTypes.next(detailsTypes);
        this.toolsTypes.next(toolsTypes);
        this.bestPractices.next(bestPractices);
        this.staticPages.next(staticPages);
        resolve();
      });
    });
  }

  public async updateBestPractices() {
    const bestPractices = await this.fetchEntriesForContentType('bestPractice');
    this.bestPractices.next(bestPractices);
  }

  public postContent(article) {
    return this.postImage(article.picture).then(asset => {
      return this.manClient.getSpace(environment.contentfulSpaceID)
        .then((space) => space.getEnvironment('master'))
        .then((env) => {
          const entry: any = {
            fields: {
              photo: {
                'en-US': {
                  sys: {
                    id: asset.sys.id,
                    linkType: 'Asset',
                    type: 'Link',
                  },
                },
              },
              title: {
                'en-US': article.title,
              },
              author: {
                'en-US': article.author,
              },
              authorEmail: {
                'en-US': article.authorEmail,
              },
              comments: {
                'en-US': article.comments,
              },
            },
          };
          if (article.businessUnit) {
            entry.fields.businessUnit = {
              'en-US': {
                sys: {
                  id: article.businessUnit,
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            };
          }
          if (article.toolsType) {
            entry.fields.toolsType = {
              'en-US': {
                sys: {
                  id: article.toolsType,
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            };
          }
          if (article.detailType) {
            entry.fields.detailType = {
              'en-US': {
                sys: {
                  id: article.detailType,
                  type: 'Link',
                  linkType: 'Entry',
                },
              },
            };
          }
          return env.createEntry('bestPractice', entry);
        }).then((entry) => {
          return entry.publish();
        }).then((entry) => {
          return entry;
        });
    });
  }

  public postImage(image) {
    return this.manClient.getSpace(environment.contentfulSpaceID)
      .then((space) => space.getEnvironment('master'))
      .then((env) => {
      //  console.log('uploading...');
        return env.createUpload({
          file: image.contentData,
          contentType: image.contentType,
          fileName: image.fileName,
        }).then((upload) => {
     //     console.log('creating asset...');
          return env.createAsset({
            sys: {
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: upload.sys.id,
                },
              },
            },
            fields: {
              title: {
                'en-US': image.fileName,
              },
              file: {
                'en-US': {
                  fileName: image.fileName,
                  contentType: image.contentType,
                  uploadFrom: {
                    sys: {
                      type: 'Link',
                      linkType: 'Upload',
                      id: upload.sys.id,
                    },
                  },
                },
              },
            },
          });
        }).then((asset) => {
     //     console.log('prcessing...');
          return asset.processForLocale('en-US', { processingCheckWait: 2000 });
        }).then((asset) => {
    //      console.log('publishing...');
          return asset.publish();
        }).then((asset) => {
    //      console.log('Done.');
          return asset;
        });
      }).catch((err) => {
        console.error(err);
      });
  }

  // Load all entries for a given Content Type from Contentful
  private fetchEntriesForContentType(contentType) {
    return this.client.getEntries({ content_type: contentType })
      .then((response) => response.items)
      .catch((error) => {
        console.error(error);
      });
  }
}
