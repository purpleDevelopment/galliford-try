// React Native Default
import {ScrollView, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';

// Imported Node Modules
import axios from 'axios';

// Custom Components
import ArticleListItem from '../Components/ArticleListItem';
import NavBar from '../Components/NavBar';


export default function ArticleTypeScreen({navigation, route}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=article&fields.articleCategory.sys.id=' +
        route.params.articleTypeID,
    }).then(response => {
      setArticles(response.data.items);
    });
  }, []);

  return (
    <SafeAreaView>
      <NavBar navigation={navigation} showBack={true} />
      <ScrollView>
        {articles.map((article, i) => {
          return (
            <ArticleListItem
              key={i}
              article={article}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
