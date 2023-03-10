/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// React Native Default
import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Imported Node Modules
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Components
import Home from "./Components/Home";
import ArticleType from "./Components/ArticleType";
import Article from "./Components/Article";

const Stack = createStackNavigator();

const base_url = 'https://cdn.contentful.com'
const access_token = '1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50';
const space_id = 'kst95g92kfwh';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ArticleType" component={ArticleType} />
        <Stack.Screen name="Article" component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
