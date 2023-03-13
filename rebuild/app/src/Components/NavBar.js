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

export default function NavBar({navigation, showBack}) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleBurger = () => {
    // navigation.navigate('BurgerScreen');
    console.log('Open burger');
  };

  return (
    <View style={styles.navContainer}>
      <View>{showBack ? <Button title="Back" onPress={handleBack} /> : null}</View>
      <Image source={logo} style={styles.logo} resizeMode={'contain'} />
      <View>
        <Button title="X" onPress={handleBurger} style={styles.burgerButton} />
      </View>
    </View>
  );
}