// React Native Default
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// Imported Node Modules
// Custom Components

// Stylesheets & Assets
import styles from '../Styles/NavBar.module';
import logo from '../assets/logoBlock.jpg';
import backBtn from '../assets/arrow-left.png';
import backArrow from '../assets/arrow-left.png';

export default function NavBar({navigation, showBack, toggleBurger}) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleBurger = () => {
    toggleBurger();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#202230',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 85,
      }}>
      <View
        style={{justifyContent: 'center', alignItems: 'flex-start', flex: 1}}>
        {showBack ? (
          <TouchableOpacity
            onPress={handleBack}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Image
              source={backArrow}
              style={{width: 20}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}>
        <Image source={logo} style={{width: '100%'}} resizeMode={'contain'} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'flex-end'
        }}>
        <TouchableOpacity onPress={handleBurger}>
          <View
            style={{
              backgroundColor: '#488090',
              width: 30,
              height: 3,
              marginTop: 7,
            }}
          />
          <View
            style={{
              backgroundColor: '#488090',
              width: 30,
              height: 3,
              marginTop: 7,
            }}
          />
          <View
            style={{
              backgroundColor: '#488090',
              width: 30,
              height: 3,
              marginTop: 7,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
