// React Native Default
import {View, Text, Button} from 'react-native';
import React from 'react';

// Imported Node Modules
// Custom Components



export default function NavBar({navigation, showBack}) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleBurger = () => {
    navigation.navigate('BurgerScreen');
  };

  return (
    <View>
      {showBack ? <Button title="<" onPress={handleBack} /> : ''}
      <Button title="X" onPress={handleBurger} />
    </View>
  );
}
