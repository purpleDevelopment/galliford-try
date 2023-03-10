// React Native Default
import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

// Imported Node Modules

// Custom Components


export default function ArticleListItem( {article, navigation} ) {

    
    const handlePress = (e) => {
        navigation.navigate('ArticleScreen', {articleID: article.sys.id});
    }

  return (
    <TouchableOpacity onPress={(e) => handlePress(e)}>
      <Text>{article.fields.title}</Text>
    </TouchableOpacity>
  )
}