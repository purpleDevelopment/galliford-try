import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavBar from '../Components/NavBar';
import headingImg from '../assets/headingBestBG.png';
import styles from '../Styles/Screens.module';
import BestPracticeLinkItem from '../Components/BestPracticeLinkItem';
import axios from 'axios';

export default function BestPracticeScreen({navigation}) {
  const [bestPractices, setBestPractices] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=bestPractice',
    }).then(response => {
      setBestPractices(response.data.items);
    });
  }, []);

  const toggleBurger = () => {
    setIsBurgerVisable(!isBurgerVisable);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <NavBar
        navigation={navigation}
        showBack={false}
        toggleBurger={toggleBurger}
      />
      <ImageBackground
        source={headingImg}
        resizeMode="cover"
        style={{padding: 20}}>
        <Text style={styles.pageTitle}>Sharing Best Practice</Text>
      </ImageBackground>
      <FlatList
        data={bestPractices}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => (
          <View style={{width: '50%', marginBottom: 20}}>
            <BestPracticeLinkItem item={item} navigation={navigation}/>
          </View>
        )}
      />
      {/* {bestPractices.map((item, i) => {
          console.log(item.fields.title);
          return <Text key={i} style={{flex: 1, color: 'black'}}>{item.fields.title}</Text>;
        })} */}
    </SafeAreaView>
  );
}
