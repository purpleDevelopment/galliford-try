import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/ListStyles.module';
export default function BestPracticeBox({navigation, boxColor}) {
  const handlePress = () => {
    navigation.navigate('BestPracticeScreen');
  };

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={{backgroundColor: boxColor, width: '100%'}}>
        <Image
          source={{
            uri: 'https://images.ctfassets.net/kst95g92kfwh/7oI7keMzROZODFQ0R4v072/2055f70b3fe232cd2e35eef4a1f56fa9/sharingBestPractices.jpg',
          }}
          style={{width: '100%', height: 150}}
          resizeMode="cover"
        />
        <Text style={styles.boxText}>Sharing Best Practice</Text>
      </View>
      <LinearGradient
        locations={[0.5, 0.5]}
        colors={[boxColor, 'rgba(0, 0, 0, 0)']}
        height={25}
        {...{
          useAngle: true,
          angle: 175,
          angleCenter: {x: 0.5, y: 0.5},
        }}></LinearGradient>
    </TouchableOpacity>
    // <View>
    //   <Text></Text>
    // </View>
  );
}
