// React Native Default
import {
  ScrollView,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// Imported Node Modules
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {Overlay} from 'react-native-elements';

// Custom Components
import ArticleListItem from '../Components/ArticleListItem';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

// Stylesheets & Assets
import styles from '../Styles/Screens.module';
import bgImage from '../assets/navyBG.jpg';
import footerImg from '../assets/challengingBeliefs.png';

export default function ArticleTypeScreen({navigation, route}) {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState();
  const [isBurgerVisable, setIsBurgerVisable] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=article&fields.articleCategory.sys.id=' +
        route.params.articleTypeID,
    }).then(response => {
      setTitle(response.data.includes.Entry[0].fields.title);
      setArticles(response.data.items);
    });
  }, []);

  const toggleBurger = () => {
    setIsBurgerVisable(!isBurgerVisable);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#202230'}}>
      <SafeAreaView style={{flex: 1}}>
        <NavBar
          navigation={navigation}
          showBack={false}
          toggleBurger={toggleBurger}
        />
        <Header title={title} />
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{
            flexGrow: 1,
          }}>
          <ScrollView style={{flex: 1}}>
            {articles.map((article, i) => {
              return (
                <ArticleListItem
                  key={i}
                  navigation={navigation}
                  articles={articles}
                  i={i}
                />
              );
            })}
          </ScrollView>
        </ImageBackground>
        <View style={{backgroundColor: '#000000', alignItems: 'center'}}>
          <Image
            source={footerImg}
            style={{width: 171, height: 90}}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
