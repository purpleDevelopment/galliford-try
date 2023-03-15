import {SafeAreaView, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Overlay} from 'react-native-elements';
import BurgerListItem from '../Components/BurgerListItem';
import axios from 'axios';

export default function BurgerMenu({
  navigation,
  isBurgerVisable,
  setIsBurgerVisable,
  types,
}) {
  const [articleTypes, setArticleTypes] = useState();
  const [staticPages, setStaticPages] = useState();
  const [pages, setPages] = useState([
    {fields: {title: 'Home'}, sys: {id: '0000'}},
  ]);
  const sharingBestPractices = [
    {
      fields: {title: 'Sharing Best Practices'},
      sys: {
        id: '0001',
        contentType: {sys: {id: 'bestPractice'}},
        componentName: 'BestPracticeScreen',
      },
    },
  ];

  const uploadBestPractices = [
    {
      fields: {title: 'Upload Best Practices'},
      sys: {
        id: '0002',
        contentType: {sys: {id: 'bestPractice'}},
        componentName: 'UploadBestPracticeScreen',
      },
    },
  ];

  useEffect(() => {
    if (pages.length > 1) {
      // Do nothing
    } else {
      axios({
        method: 'get',
        url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=articleType',
      })
        .then(response => {
          setPages(current => [...current, ...response.data.items]);
        })
        .then(response => {
          setPages(current => [
            ...current,
            ...sharingBestPractices,
            ...uploadBestPractices,
          ]);
        })
        .then(response => {
          axios({
            method: 'get',
            url: 'https://cdn.contentful.com/spaces/kst95g92kfwh/environments/master/entries?access_token=1833b658c22f833fc1c5b37e52ce3dd31eb8a25ef1d1094154346499ad566e50&content_type=staticPages',
          }).then(responseB => {
            setPages(current => [...current, ...responseB.data.items]);
          });
        });
    }
  }, []);

  const toggleBurger = () => {
    console.log('toggle');
    setIsBurgerVisable(!isBurgerVisable);
  };
  return (
    <Overlay
      isVisible={isBurgerVisable}
      onBackdropPress={toggleBurger}
      overlayStyle={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '70%',
        height: '100%',
        backgroundColor: '#488090',
      }}>
      <SafeAreaView>
        <ScrollView>
          {pages.map((page, i) => {
            return (
              <BurgerListItem
                key={i}
                navigation={navigation}
                setIsBurgerVisable={setIsBurgerVisable}
                page={page}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Overlay>
  );
}
