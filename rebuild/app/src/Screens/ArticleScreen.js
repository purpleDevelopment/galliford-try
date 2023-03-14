// React Native Default
import {
  ScrollView,
  Text,
  SafeAreaView,
  Button,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// Imported Node Modules
import axios from 'axios';
import {Overlay} from 'react-native-elements';

// Custom Components
import NavBar from '../Components/NavBar';
import ArticleFooter from '../Components/ArticleFooter';
import backArrow from '../assets/arrow-left.png';
import nextArrow from '../assets/arrow-right.png';
import bgImage from '../assets/footerBG.jpg';

export default function ArticleScreen({route, navigation}) {
  const [isBurgerVisable, setIsBurgerVisable] = useState(false);
  const [articles, setArticles] = useState(route.params.articles);
  const [i, setI] = useState(route.params.i);
  const [currentArticle, setCurrentArticle] = useState(articles[i]);
  const [articleTitle, setArticleTitle] = useState();
  const [articleMarkup, setArticleMarkup] = useState();
  const [imgID, setImgID] = useState();
  const [imageLink, setImageLink] = useState();

  useEffect(() => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries/' +
        currentArticle.sys.id +
        '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then(response => {
      console.log(response);
      setArticleTitle(response.data.fields.title);
      setArticleMarkup(response.data.fields.articleMarkup);
      setImgID(response.data.fields.headerImage.sys.id);
    });
  }, []);

  useEffect(() => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/assets/' +
        imgID +
        '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then(response => {
      setImageLink('https:' + response.data.fields.file.url);
    });
  }, [imgID]);

  const handleBack = () => {
    if (i == 0) {
      console.log(currentArticle);
      navigation.navigate('ArticleTypeScreen', {
        articleTypeID: currentArticle.fields.articleCategory.sys.id,
      });
    } else {
      navigation.push('ArticleScreen', {articles: articles, i: i - 1});
    }
  };

  const handleNext = () => {
    if (i + 1 == articles.length) {
      navigation.navigate('HomeScreen');
    } else {
      navigation.push('ArticleScreen', {articles: articles, i: i + 1});
    }
  };

  const toggleBurger = () => {
    setIsBurgerVisable(!isBurgerVisable);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar
        navigation={navigation}
        showBack={false}
        toggleBurger={toggleBurger}
      />
      <ScrollView
        style={{
          flex: 1,
        }}>
        <Image
          source={{uri: imageLink}}
          style={{width: '100%', height: 250}}
          resizeMode="cover"
        />
        <Text
          style={{
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 16,
            paddingHorizontal: 30,
            paddingVertical: 15,
          }}>
          {articleTitle}
        </Text>
        <View
          style={{
            marginLeft: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(154, 156, 158, 0.749)',
          }}></View>
        <View>
          <Text style={{padding: 30, paddingTop: 20}}>{articleMarkup}</Text>
        </View>
      </ScrollView>
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
            onPress={handleNext}
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
      <Overlay
        isVisible={isBurgerVisable}
        onBackdropPress={toggleBurger}></Overlay>
    </SafeAreaView>
  );
}
