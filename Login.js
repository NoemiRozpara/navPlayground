import React from 'react';
import {Text, Button} from 'react-native';

export default function Login({navigation, loggedIn, toggleLoggedIn}) {
  console.log({loggedIn, toggleLoggedIn, navigation});
  return (
    <>
      <Text>Login</Text>
      <Button
        title="navigate to home"
        onPress={() => {
          navigation.navigate('Drawer');
        }}
      />
      {/* <Button
        title={loggedIn ? 'loggedin' : 'loggedout'}
        onPress={() => toggleLoggedIn(!loggedIn)}
      /> */}
    </>
  );
}
