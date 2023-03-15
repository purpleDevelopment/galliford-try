// React Native Default
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

// Imported Node Modules
// Custom Components

// Stylesheets & Assets
import styles from '../Styles/NavBar.module';
import logo from '../assets/logoBlock.jpg';
import backBtn from '../assets/arrow-left.png';
import backArrow from '../assets/arrow-left.png';
import BurgerMenu from '../Screens/BurgerMenu';

export default function NavBar({
  navigation,
  showBack,
  toggleBurger,
}) {
  const [isBurgerVisable, setIsBurgerVisable] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleBurger = () => {
    setIsBurgerVisable(!isBurgerVisable);
  };

  const goHome = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View>
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
          <TouchableOpacity onPress={goHome} style={{width: '100%'}}>
            <Image
              source={logo}
              style={{width: '100%'}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            alignItems: 'flex-end',
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
      <BurgerMenu
        navigation={navigation}
        isBurgerVisable={isBurgerVisable}
        setIsBurgerVisable={setIsBurgerVisable}
      />
    </View>
  );
}
