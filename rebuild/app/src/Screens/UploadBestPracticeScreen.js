import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import NavBar from '../Components/NavBar';
import headingImg from '../assets/headingBestBG.png';
import uploadIcon from '../assets/upload.png';
import {Dropdown} from 'react-native-element-dropdown';
import styles from '../Styles/Screens.module';
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
  const buOptions = [
    {label: 'Other', value: 'Other'},
    {label: 'Investments', value: 'Investments'},
    {label: 'Facilities Management', value: 'Facilities Management'},
  ];

  const toolsOptions = [
    {label: 'Other', value: 'Other'},
    {label: 'Investments', value: 'Investments'},
    {label: 'Facilities Management', value: 'Facilities Management'},
  ];

  const detailOptions = [
    {label: 'Other', value: 'Other'},
    {label: 'Investments', value: 'Investments'},
    {label: 'Facilities Management', value: 'Facilities Management'},
  ];
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
        <Text style={styles.pageTitle}>Upload Best Practice</Text>
      </ImageBackground>
      <View>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Add description"
          multiline={true}
        />
        <Text style={{fontWeight: 'bold'}}>Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Enter title"
        />
        <Text style={{fontWeight: 'bold'}}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
        />
        <Text style={{fontWeight: 'bold'}}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
        />
        <Text style={{fontWeight: 'bold'}}>Business Unit</Text>
        <Dropdown
          data={buOptions}
          placeholder={'Select a business unit'}
          labelField="label"
          valueField="value"
          value={businessUnitValue}
          onChange={item => {
            setBusinessUnitValue(item.value);
          }}
        />
        <Text style={{fontWeight: 'bold'}}>Tools</Text>
        <Dropdown
          data={toolsOptions}
          placeholder={'Select a tool'}
          labelField="label"
          valueField="value"
          value={toolsValue}
          onChange={item => {
            setToolsValue(item.value);
          }}
        />
        <Text style={{fontWeight: 'bold'}}>Detail</Text>
        <Dropdown
          data={detailOptions}
          placeholder={'Select detail type'}
          labelField="label"
          valueField="value"
          value={detailValue}
          onChange={item => {
            setDetailValue(item.value);
          }}
        />
        <TouchableOpacity>
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
      </View>
    </SafeAreaView>
  );
}
