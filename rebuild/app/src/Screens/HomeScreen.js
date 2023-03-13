// React Native Default
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';

// Imported Node Modules
import axios from 'axios';

// Custom Components
import ArticleTypeBox from '../Components/ArticleTypeBox';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

// Stylesheets & Assets
import styles from '../Styles/Screens.module';
import appStyles from '../Styles/App.module';
import bgImage from '../assets/navyBG.jpg';

export default function HomeScreen({navigation, route}) {
  const [articleTypes, setArticleTypes] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=articleType',
    }).then(response => {
      setArticleTypes(response.data.items);
      console.log(response.data.fields);
    });
  }, []);

  return (
    <SafeAreaView>
      <NavBar navigation={navigation} showBack={false} />
      <ImageBackground
        source={bgImage}
        style={styles.pageGradient}
        resizeMode="cover">
        <ScrollView>
          <Header title="Challenging Beliefs,  Affecting Behaviour" />
            <View style={styles.pageCont}>
              {articleTypes.map((type, i) => {
                return (
                  <View
                    key={i}
                    style={
                      i % 2 == 0
                        ? [appStyles.box, appStyles.left]
                        : [appStyles.box, appStyles.right]
                    }>
                    <ArticleTypeBox type={type} navigation={navigation} />
                  </View>
                );
              })}
            </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   bodyCont: {
//     padding: 15,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   articleTypeBoxContainer: {
//     flexBasis: '50%',
//     marginBottom: 15,
//   },
//   articleTypeBoxLeft: {
//     paddingLeft: 15,
//   },
//   text: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
// });
