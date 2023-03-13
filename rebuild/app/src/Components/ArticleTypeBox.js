// React Native Default
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

// Imported Node Modules
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

// Custom Components
// Stylesheets & Assets
import styles from '../Styles/ListStyles.module';

export default function ArticleTypeBox({type, navigation}) {
  const [imageLink, setImageLink] = useState();
  const iconID = type.fields.icon.sys.id;

  useEffect(() => {
    axios({
      method: 'get',
      url:
        'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/assets/' +
        iconID +
        '?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50',
    }).then(response => {
      setImageLink(response.data.fields.file.url);
    });
  }, []);

  const handlePress = e => {
    navigation.navigate('ArticleTypeScreen', {
      articleTitle: type.fields.title,
      articleTypeID: type.sys.id,
    });
  };

  return (
    <TouchableOpacity onPress={e => handlePress(e)}>
      <View style={styles.box}>
        <Image
          source={{uri: 'https:' + imageLink}}
          style={styles.boxThumb}
          resizeMode="cover"
        />
        <Text style={styles.boxText}>{type.fields.title}</Text>
      </View>
      <LinearGradient
        locations={[0.5, 0.5]}
        colors={['#488090', 'rgba(72, 128, 144, 0)']}
        height={25}
        {...{
          useAngle: true,
          angle: 175,
          angleCenter: {x: 0.5, y: 0.5},
        }}></LinearGradient>
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
//   articleTypeBox: {
//     backgroundColor: '#488090',
//     width: '100%',
//   },
//   articleTypeImg: {
//     width: '100%',
//     height: 150,
//   },
//   text: {
//     color: '#ffffff',
//     padding: '7%',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });
