import {View, Button, SafeAreaView} from 'react-native';
import React from 'react';


export default function BurgerScreen({navigation}) {
  const handleBurger = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Button title="X" onPress={handleBurger} />
    </SafeAreaView>
  );
}
