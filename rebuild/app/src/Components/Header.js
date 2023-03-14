// React Native Default
import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

// Imported Node Modules

// Custom Components
// Stylesheets & Assets
import styles from '../Styles/Screens.module';
import image from '../assets/headingBG.jpg';

export default function Header({title}) {
  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{padding: 20}}>
        <Text style={styles.pageTitle}>{title}</Text>
      </ImageBackground>
    </View>
  );
}
