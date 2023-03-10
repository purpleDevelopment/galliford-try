// React Native Default
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

// Imported Node Modules
import axios from 'axios';

// Custom Components

export default function ArticleTypeBox( { type, navigation } ) {
  const [imageLink, setImageLink] = useState();
  const iconID = type.fields.icon.sys.id;

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/assets/' + iconID + '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then((response) => {
      setImageLink(response.data.fields.file.url);
    });
  }, [])
  
  const handlePress = (e) => {
    // axios({
    //   method: 'get',
    //   url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=article&fields.articleCategory.sys.id='+articleTypeID,
    // }).then((response) => {
    //   console.log(response.data);
    // });
    navigation.navigate('ArticleType', {articleTypeID: type.sys.id});
  }

  return (
    <TouchableOpacity onPress={(e) => handlePress(e)}>
      <Image source={{uri: 'https:' + imageLink}} style={{width: 100, height: 100}}/>
      <Text>{type.fields.title}</Text>
    </TouchableOpacity>
  )
}