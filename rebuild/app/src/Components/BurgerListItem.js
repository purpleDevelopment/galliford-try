// React Native Default
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

// Imported Node Modules

// Custom Components

export default function BurgerListItem({
  navigation,
  setIsBurgerVisable,
  title,
  pageID,
}) {
  const handlePress = () => {
    //   navigation.navigate('ArticleTypeScreen', {
    //     articleTitle: page.fields.title,
    //     articleTypeID: page.sys.id,
    //   });
    console.log(title);
    console.log(pageID);
    navigation.navigate('ArticleTypeScreen', {
      articleTitle: title,
      articleTypeID: pageID,
    });
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
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
