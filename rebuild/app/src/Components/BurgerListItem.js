// React Native Default
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

// Imported Node Modules

// Custom Components

export default function BurgerListItem({navigation, setIsBurgerVisable, page}) {
  const handlePress = () => {
    if (page.fields.title == 'Home') {
      navigation.navigate('HomeScreen');
    } else if (page.sys.contentType.sys.id == 'bestPractice') {
      navigation.navigate(page.sys.componentName);
    } else if (page.sys.contentType.sys.id == 'staticPages') {
      navigation.navigate('CustomStaticPage', {
        title: page.fields.title,
        content: page.fields.pageContent,
      });
    } else if (page.sys.contentType.sys.id == 'articleType') {
      navigation.navigate('ArticleTypeScreen', {
        articleTitle: page.fields.title,
        articleTypeID: page.sys.id,
      });
    }
    setIsBurgerVisable(false);
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
        <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 15}}>
          {page.fields.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
