import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function BestPracticeLinkItem({item, navigation}) {
  const [imageLink, setImageLink] = useState();
  const iconID = item.fields.photo.sys.id;
  const handlePress = () => {
    navigation.navigate('BestPracticeItemScreen', {item: item})
  }
  useEffect(() => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/assets/' +
        iconID +
        '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then(response => {
      setImageLink(response.data.fields.file.url);
    });
  }, []);
  return (
    <View style={{padding: 10}}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{uri: 'https:' + imageLink}}
          style={{width: '100%', height: 150}}
        />
        <Text>{item.fields.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
