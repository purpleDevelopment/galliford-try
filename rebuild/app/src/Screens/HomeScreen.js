// React Native Default
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';

// Imported Node Modules
import axios from 'axios';

// Custom Components
import ArticleTypeBox from '../Components/ArticleTypeBox';
import ArticleListItem from '../Components/ArticleListItem';
import BestPracticeBox from '../Components/BestPracticeBox';

import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

// Stylesheets & Assets
// import styles from '../Styles/Screens.module';
// import appStyles from '../Styles/App.module';
import bgImage from '../assets/navyBG.jpg';

export default function HomeScreen({navigation, route}) {
  const [articleTypes, setArticleTypes] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=articleType',
    }).then(response => {
      setArticleTypes(response.data.items);
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
        <Header title="Challenging Beliefs, Affecting Behaviour" />
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{
            flexGrow: 1,
          }}>
          <ScrollView style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              {articleTypes.map((type, i) => {
                return (
                  <View
                    key={i}
                    style={{
                      width: '50%',
                      paddingHorizontal: 10,
                      marginBottom: 25,
                    }}>
                    <ArticleTypeBox
                      type={type}
                      navigation={navigation}
                      boxColor={
                        type.fields.title == 'Tools and Resources'
                          ? '#febd45'
                          : type.fields.title == 'Sharing Best Practice'
                          ? '#e47317'
                          : '#488090'
                      }
                    />
                  </View>
                );
              })}
              <View
                style={{
                  width: '50%',
                  paddingHorizontal: 10,
                  marginBottom: 25,
                }}>
                <BestPracticeBox navigation={navigation} boxColor="#e47317" />
                {/* <ArticleTypeBox
              type={type}
              navigation={navigation}
              boxColor={
                type.fields.title == 'Tools and Resources'
                  ? '#febd45'
                  : type.fields.title == 'Sharing Best Practice'
                  ? '#e47317'
                  : '#488090'
              }
            /> */}
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}
