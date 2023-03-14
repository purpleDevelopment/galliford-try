import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import backArrow from '../assets/arrow-left.png';
import nextArrow from '../assets/arrow-right.png';
import bgImage from '../assets/footerBG.jpg';

export default function ArticleFooter({navigation, articles, i}) {
  const handleNext = () => {
    console.log(i);
    //   if (i + 1 >= articles.length) {
    //     console.log('Next topic');
    //   } else {
    //     navigation.push('ArticleScreen', {
    //       articles: articles,
    //       i: i + 1,
    //     });
    //   }
  };

  const handleBack = () => {
    // if (i > 0) {
    //   navigation.push('ArticleScreen', {
    //     articles: articles,
    //     i: i - 1,
    //   });
    // } else {
    //   console.log('Next topic');
    // }
  };

  return (
    <View
      style={{
        alignItems: 'flex-end',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={handleBack}
        style={{
          flex: 1,
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <Image source={backArrow} style={{width: 20}} resizeMode="contain" />
      </TouchableOpacity>
      <ImageBackground source={bgImage} style={{flex: 2}} resizeMode="cover">
        <TouchableOpacity
          onPress={handleBack}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 30,
          }}>
          <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 16}}>
            Next category
          </Text>
          <Image
            source={nextArrow}
            style={{width: 20, marginLeft: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
