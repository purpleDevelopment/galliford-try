// React Native Default
import {
  ScrollView,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// Imported Node Modules
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

// Custom Components
import ArticleListItem from '../Components/ArticleListItem';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

// Stylesheets & Assets
import styles from '../Styles/Screens.module';
import bgImage from '../assets/navyBG.jpg';

export default function ArticleTypeScreen({navigation, route}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=article&fields.articleCategory.sys.id=' +
        route.params.articleTypeID,
    }).then(response => {
      setArticles(response.data.items);
    });
  }, []);

  return (
    <SafeAreaView style={styles.screenCont}>
      <NavBar navigation={navigation} showBack={true} />
      <ImageBackground
        source={bgImage}
        style={styles.pageGradient}
        resizeMode="cover">
        <ScrollView style={styles.flexGrow}>
          <Header title={route.params.articleTitle} />

          {articles.map((article, i) => {
            console.log(i);
            return (
              <ArticleListItem
                key={i}
                i={i}
                articles={articles}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </ImageBackground>
      <View style={styles.footer}>
        <Text style={styles.footerText}>This is a footer</Text>
      </View>
    </SafeAreaView>
  );
}
