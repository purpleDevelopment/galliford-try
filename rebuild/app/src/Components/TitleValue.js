import {View, Text} from 'react-native';
import React from 'react';

export default function TitleValue({title, value}) {
  return (
    <View style={{flex:1,flexDirection: 'row'}}>
      <Text style={{fontWeight: 'bold'}}>{title}: </Text>
      <Text>{value}</Text>
    </View>
  );
}
