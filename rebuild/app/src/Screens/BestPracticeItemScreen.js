import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import NavBar from '../Components/NavBar';
import TitleValue from '../Components/TitleValue';

import axios from 'axios';

export default function BestPracticeItemScreen({navigation, route}) {
  const [currentItem, setCurrentItem] = useState(route.params.item);
  const [imgLink, setImgLink] = useState();
  const [businessUnit, setBusinessUnit] = useState();
  const [toolsType, setToolsType] = useState();
  const [detailsType, setDetailsType] = useState();

  const getPhoto = () => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/assets/' +
        currentItem.fields.photo.sys.id +
        '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then(response => {
      setImgLink(response.data.fields.file.url);
    });
  };

  const getBU = () => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries/' +
        currentItem.fields.businessUnit.sys.id +
        '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then(response => {
      setBusinessUnit(response.data.fields.title);
    });
  };

  const getTools = () => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries/' +
        currentItem.fields.toolsType.sys.id +
        '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then(response => {
      setToolsType(response.data.fields.title);
    });
  };
  const getDetails = () => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries/' +
        currentItem.fields.detailType.sys.id +
        '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then(response => {
      setDetailsType(response.data.fields.title);
    });
  };

  const handleEmail = () => {
    Linking.openURL('mailto:' + currentItem.fields.authorEmail);
  };

  useEffect(() => {
    console.log(currentItem.fields.authorEmail);
    getPhoto();
    getBU();
    getTools();
    getDetails();
  }, []);

  const toggleBurger = () => {
    setIsBurgerVisable(!isBurgerVisable);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#202230'}}>
      <SafeAreaView style={{flex: 1}}>
        <NavBar
          navigation={navigation}
          showBack={true}
          toggleBurger={toggleBurger}
        />
        <Image
          source={{uri: 'https:' + imgLink}}
          style={{width: '100%', height: 250}}
          resizeMode="cover"
        />
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
          }}>
          <Text
            style={{
              color: '#000000',
              fontWeight: 'bold',
              fontSize: 16,
              paddingHorizontal: 30,
              paddingVertical: 15,
            }}>
            {currentItem.fields.title} by {currentItem.fields.author}
          </Text>
          <View
            style={{
              marginLeft: 15,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(154, 156, 158, 0.749)',
            }}></View>
          <View style={{paddingHorizontal: 30, paddingTop: 20}}>
            <Text style={{marginBottom: 15}}>
              {currentItem.fields.comments}
            </Text>
            <View style={{marginBottom: 15}}>
              <TitleValue title="Business Unit" value={businessUnit} />
              <TitleValue title="Tools" value={toolsType} />
              <TitleValue title="Detail" value={detailsType} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Contact uploader: </Text>
              <TouchableOpacity onPress={handleEmail}>
                <Text>{currentItem.fields.authorEmail}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
