import React from 'react';
import {Text, Button} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import {getLeftNav, getRightNav} from './navContext';

export default function Tab1({navigation}) {
  const leftnav = getLeftNav();
  const rightnav = getRightNav();
  return (
    <>
      <Text>Tab1</Text>
      <Button
        title="navigate to login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      {/* <Button
        title="open left"
        onPress={() => {
          // navigation.toggleDrawer('MenuDrawer');
          // navigation.toggleDrawer()
          // navigation.dispatch({
          //   ...CommonActions.setParams({title: 'ABC'}),
          //   source: 'Tab1',
          // });
          leftnav.toggleDrawer();
        }}
      /> */}
      <Button
        title="open right"
        onPress={() => {
          rightnav.toggleDrawer();
          // navigation.toggleDrawer('WebStaticDrawer');
          // navigation.dispatch(CommonActions.navigate('WebStaticDrawer'));
        }}
      />
    </>
  );
}
