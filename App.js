/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {setLeftNav, setRightNav} from './navContext';

import Login from './Login';
// import Home from './Home';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const WebStaticDrawer = createDrawerNavigator();
const MenuDrawer = createDrawerNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
}

function InnerDrawerNav() {
  return (
    <WebStaticDrawer.Navigator
      key="WebStaticDrawer"
      initialRouteName="Home"
      screenOptions={({navigation}) => {
        setLeftNav(navigation);
      }}
      drawerType="permanent">
      <WebStaticDrawer.Screen name="Tab1" component={Tab1} />
      <WebStaticDrawer.Screen name="Tab2" component={Tab2} />
    </WebStaticDrawer.Navigator>
  );
}

function DrawerNav() {
  const web = true;
  return (
    <MenuDrawer.Navigator
      key="MenuDrawer"
      initialRouteName="InnerDrawerNav"
      drawerPosition={'right'}
      screenOptions={({navigation}) => {
        setRightNav(navigation);
      }}>
      <MenuDrawer.Screen
        name="InnerNav"
        component={web ? InnerDrawerNav : TabHome}
      />
    </MenuDrawer.Navigator>
  );
}

function App() {
  const [loggedIn, toggleLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <Stack.Screen name="Drawer" component={DrawerNav} />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            loggedIn={loggedIn}
            toggleLoggedIn={toggleLoggedIn}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
