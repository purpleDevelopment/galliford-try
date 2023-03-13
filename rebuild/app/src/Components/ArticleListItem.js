// React Native Default
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect,useState} from 'react';

// Imported Node Modules

// Custom Components
import styles from '../Styles/ListStyles.module';

export default function ArticleListItem({navigation, articles, i}) {
  const [currentArticle, setCurrentArticle] = useState(articles[i])
  const [nextPageID, setNextPageID] = useState();
  
  const handlePress = e => {
    navigation.navigate('ArticleScreen', {articles: articles, i: i});
  };

  return (
    <View style={styles.articleItem}>
      <TouchableOpacity onPress={e => handlePress(e)}>
        <Text style={styles.articleTitle}>{currentArticle.fields.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
