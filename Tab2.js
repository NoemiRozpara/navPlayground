import React from 'react';
import {Text, Button} from 'react-native';

export default function Tab2({navigation}) {
  return (
    <>
      <Text>Tab2</Text>
      <Button
        title="navigate to login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </>
  );
}
