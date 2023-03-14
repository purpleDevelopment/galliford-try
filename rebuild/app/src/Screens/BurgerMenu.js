import {SafeAreaView, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Overlay} from 'react-native-elements';
import BurgerListItem from '../Components/BurgerListItem';

export default function BurgerMenu({isBurgerVisable, types}) {
  const homePage = {};
  const [pages, setPages] = useState([]);
  useEffect(() => {
    if (types.length > 0) {
      setPages(types);
    }
  }, [types]);

  const toggleBurger = () => {
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
            return <BurgerListItem key={i} title={page.fields.title} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </Overlay>
  );
}
