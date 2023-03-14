// React Native Default
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

// Imported Node Modules

// Custom Components
import styles from '../Styles/ListStyles.module';
import nextArrow from '../assets/arrow-right.png';

export default function ArticleListItem({navigation, articles, i}) {

  const [currentArticle, setCurrentArticle] = useState(articles[i]);

  const handlePress = e => {
    navigation.navigate('ArticleScreen', {articles: articles, i: i});
  };

  return (
    <View
      style={{
        borderBottomColor: 'rgba(154, 156, 158, 0.749)',
        borderBottomWidth: 2,
        marginLeft: 20,
      }}>
      <TouchableOpacity
        onPress={e => handlePress(e)}
        style={{
          paddingLeft: 5,
          paddingRight: 15,
          paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.articleTitle}>{currentArticle.fields.title}</Text>
        <Image
          source={nextArrow}
          style={{width: 25, height: 20}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
