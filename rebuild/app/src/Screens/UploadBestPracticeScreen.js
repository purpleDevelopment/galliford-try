import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import NavBar from '../Components/NavBar';
import headingImg from '../assets/headingBestBG.png';
import uploadIcon from '../assets/upload.png';
import cameraIcon from '../assets/camera.png';
import {Dropdown} from 'react-native-element-dropdown';
import screenStyles from '../Styles/Screens.module';
import ImagePicker from 'react-native-image-crop-picker';
import styles from '../Styles/App.module';
import axios from 'axios';

const toggleBurger = () => {
  setIsBurgerVisable(!isBurgerVisable);
};
export default function UploadBestPracticeScreen({navigation}) {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessUnitValue, setBusinessUnitValue] = useState(null);
  const [toolsValue, setToolsValue] = useState(null);
  const [detailValue, setDetailValue] = useState(null);
  const [buData, setBuData] = useState([]);
  const [toolsData, setToolsData] = useState([]);
  const [detailsData, setDetailsData] = useState([]);

  const getBusinessUnits = () => {
    axios({
      method: 'get',
      url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=buType',
    }).then(response => {
      setBuData(response.data.items);
    });
  };

  const getTools = () => {
    axios({
      method: 'get',
      url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=toolsType',
    }).then(response => {
      setToolsData(response.data.items);
    });
  };

  const getDetails = () => {
    axios({
      method: 'get',
      url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=detailsType',
    }).then(response => {
      setDetailsData(response.data.items);
    });
  };

  useEffect(() => {
    getBusinessUnits();
    getTools();
    getDetails();
  }, []);

  const handleSubmit = () => {
    console.log('submit');
    console.log('Description:' + description);
    console.log('Name:' + name);
    console.log('Title:' + title);
    console.log('Email:' + email);
    console.log('BU:' + businessUnitValue);
    console.log('Tool:' + toolsValue);
    console.log('Detail:' + detailValue);
  };

  const fromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  
  const handlePictureOption = () => {
    Alert.alert('Choose source', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Camera', onPress: () => console.log('Camera Pressed')},
      {text: 'Library', onPress: () => fromLibrary()},
    ]);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <NavBar
        navigation={navigation}
        showBack={false}
        toggleBurger={toggleBurger}
      />
      <ImageBackground
        source={headingImg}
        resizeMode="cover"
        style={{padding: 20}}>
        <Text style={screenStyles.pageTitle}>Upload Best Practice</Text>
      </ImageBackground>
      <ScrollView style={{flex: 1, padding: 30}}>
        {/* Photo and description */}
        <View
          style={[
            styles.uploadInputField,
            {flexDirection: 'row', paddingBottom: 0},
          ]}>
          <TouchableOpacity
            onPress={handlePictureOption}
            style={{
              backgroundColor: '#000000',
              marginRight: 10,
              padding: 30,
              borderRadius: 10,
            }}>
            <Image
              source={cameraIcon}
              resizeMode="contain"
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
          <TextInput
            style={{flex: 1}}
            value={description}
            onChangeText={setDescription}
            placeholder="Add description"
            multiline={true}
          />
        </View>
        {/* Name input */}
        <View style={styles.uploadInputField}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            value={name}
            style={styles.textInput}
            onChangeText={setName}
            placeholder="Enter name"
          />
        </View>
        {/* Title input */}
        <View style={styles.uploadInputField}>
          <Text style={styles.inputLabel}>Title</Text>
          <TextInput
            value={title}
            style={styles.textInput}
            onChangeText={setTitle}
            placeholder="Enter title"
          />
        </View>
        {/* Email input */}
        <View style={styles.uploadInputField}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={email}
            style={styles.textInput}
            onChangeText={setEmail}
            placeholder="Enter email"
          />
        </View>
        {/* Business Unit input */}
        <View style={styles.uploadInputField}>
          <Text style={styles.inputLabel}>Business Unit</Text>
          <Dropdown
            data={buData}
            style={styles.dropdown}
            labelField="fields.title"
            valueField="fields.title"
            placeholder={'Select a business unit'}
            placeholderStyle={styles.dropDownPlaceholder}
            value={businessUnitValue}
            onChange={item => {
              setBusinessUnitValue(item.fields.title);
            }}
          />
        </View>
        {/* Tools input */}
        <View style={styles.uploadInputField}>
          <Text style={styles.inputLabel}>Tools</Text>
          <Dropdown
            data={toolsData}
            style={styles.dropdown}
            placeholder={'Select a tool'}
            placeholderStyle={styles.dropDownPlaceholder}
            labelField="fields.title"
            valueField="fields.title"
            value={toolsValue}
            onChange={item => {
              setToolsValue(item.fields.title);
            }}
          />
        </View>
        {/* Detail input */}
        <View style={styles.uploadInputField}>
          <Text style={styles.inputLabel}>Detail</Text>
          <Dropdown
            data={detailsData}
            style={styles.dropdown}
            placeholder={'Select detail type'}
            placeholderStyle={styles.dropDownPlaceholder}
            labelField="fields.title"
            valueField="fields.title"
            value={detailValue}
            onChange={item => {
              setDetailValue(item.fields.title);
            }}
          />
        </View>

        <TouchableOpacity onPress={handleSubmit}>
          <ImageBackground
            source={headingImg}
            resizeMode="cover"
            style={{
              paddingHorizontal: 20,
              paddingVertical: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Upload</Text>
            <Image source={uploadIcon} />
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
