// React Native Default
import {ScrollView, Text, SafeAreaView, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

// Imported Node Modules
import axios from 'axios';

// Custom Components
import NavBar from '../Components/NavBar';
import ArticleFooter from '../Components/ArticleFooter';

export default function ArticleScreen({route, navigation}) {
  const [articleTitle, setArticleTitle] = useState();
  const [articleMarkup, setArticleMarkup] = useState();
  const [i, setI] = useState(route.params.i);
  const [currentArticle, setCurrentArticle] = useState(
    route.params.articles[i],
  );

  useEffect(() => {
    console.log('Length' + route.params.articles.length);
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries/' +
        currentArticle.sys.id +
        '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then(response => {
      setArticleTitle(response.data.fields.title);
      setArticleMarkup(response.data.fields.articleMarkup);
    });
  }, []);

  return (
    <SafeAreaView>
      <NavBar navigation={navigation} showBack={false} />
      <ScrollView>
        <Text>{articleTitle}</Text>
        {/* <Text>{articleMarkup}</Text> */}
      </ScrollView>
      <ArticleFooter navigation={navigation} articles={route.params.articles} i={route.params.i} />
    </SafeAreaView>
  );
}
