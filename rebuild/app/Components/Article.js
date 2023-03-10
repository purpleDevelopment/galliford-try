// React Native Default
import { ScrollView, Text } from 'react-native'
import React, {useEffect, useState} from 'react'

// Imported Node Modules
import axios from 'axios';

// Custom Components

export default function Article( {route} ) {
  const [articleTitle, setArticleTitle] = useState();
  const [articleMarkup, setArticleMarkup] = useState();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries/'+route.params.articleID+'?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then((response) => {
      setArticleTitle(response.data.fields.title);
      setArticleMarkup(response.data.fields.articleMarkup);
    });
  }, [])

  return (
    <ScrollView>
      <Text>{articleTitle}</Text>
      <Text>{articleMarkup}</Text>
    </ScrollView>
  )
}