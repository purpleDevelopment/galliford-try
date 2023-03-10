// React Native Default
import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';

// Imported Node Modules
import axios from 'axios';

// Custom Components
import ArticleTypeBox from "./ArticleTypeBox";

export default function Home( {navigation} ) {
  const [articleTypes, setArticleTypes] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=articleType',
    }).then(response => {
      setArticleTypes(response.data.items);
    });
  }, []);

  return (
    <ScrollView>
      {articleTypes.map((type, i) => {
        return <ArticleTypeBox key={i} type={type} navigation={navigation}/>;
      })}
    </ScrollView>
  );
}
