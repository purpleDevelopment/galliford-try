import {View, Text, Button} from 'react-native';
import React from 'react';

export default function ArticleFooter({navigation, articles, i}) {
  const handleNext = () => {
    if (i + 1 >= articles.length) {
      console.log('Next topic');
    } else {
      navigation.push('ArticleScreen', {
        articles: articles,
        i: i + 1,
      });
    }
  };

  const handleBack = () => {
    if (i > 0) {
      navigation.push('ArticleScreen', {
        articles: articles,
        i: i - 1,
      });
    } else {
      console.log('Next topic');
    }
  };
  return (
    <View>
      <Button title="Back" onPress={handleBack} />
      <Button title="NEXT" onPress={handleNext} />
    </View>
  );
}
