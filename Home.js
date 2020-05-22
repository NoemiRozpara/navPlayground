import React from 'react';
import {Text, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <>
      <Text>Home</Text>
      <Button
        title="navigate to login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Button
        title="open left"
        onPress={() => {
          navigation.toggleDrawer('MenuDrawer');
        }}
      />
      <Button
        title="open right"
        onPress={() => {
          navigation.toggleDrawer('WebStaticDrawer');
        }}
      />
    </>
  );
}
