import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

export default function CustomStaticPage({navigation, route}) {
  const toggleBurger = () => {
    setIsBurgerVisable(!isBurgerVisable);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar
        navigation={navigation}
        showBack={false}
        toggleBurger={toggleBurger}
      />
      <Header title={route.params.title} />
      <ScrollView
        style={{
          flex: 1, padding: 20
        }}>
          <Text>{route.params.content}</Text>
        </ScrollView>
    </SafeAreaView>
  );
}
