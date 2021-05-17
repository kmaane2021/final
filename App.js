import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState, useEffect } from "react";

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';
import SeventhPage from './pages/SeventhPage';





const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


//navigatin Drawer

const NavigationDrawerStructure = (props) => {

  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function firstScreenStack({ navigation }) {


  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}


        options={{
          title: 'PetShelter',

          headerTransparent: false,
          headerStyle: { borderBottomWidth: 0, backgroundColor: '#000' },

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,

          headerTintColor: 'white',

          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },


          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }


        }
      />
    </Stack.Navigator>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}

        options={{
          title: 'PetShelter',

          headerTransparent: false,
          headerStyle: { borderBottomWidth: 0, backgroundColor: '#000' },

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,

          headerTintColor: 'white',

          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },


          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }


        }
      />
    </Stack.Navigator>
  );
}


function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="ThirddPage"
        component={ThirdPage}

        options={{
          title: 'PetShelter',

          headerTransparent: false,
          headerStyle: { borderBottomWidth: 0, backgroundColor: '#000' },

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,

          headerTintColor: 'white',

          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },


          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }


        }
      />
    </Stack.Navigator>
  );
}


function fourthScreenStack({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="FourthdPage"
        component={FourthPage}

        options={{
          title: 'PetShelter',

          headerTransparent: false,
          headerStyle: { borderBottomWidth: 0, backgroundColor: '#000' },

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,

          headerTintColor: 'white',

          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },


          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }


        }
      />
    </Stack.Navigator>
  );
}



function fifthScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FifthPage">
      <Stack.Screen
        name="FifthdPage"
        component={FifthPage}

        options={{
          title: 'PetShelter',

          headerTransparent: false,
          headerStyle: { borderBottomWidth: 0, backgroundColor: '#000' },

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,

          headerTintColor: 'white',

          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },


          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }


        }
      />
    </Stack.Navigator>
  );
}




function sixthScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SixthPage"
        component={SixthPage}

        options={{
          title: 'PetShelter',

          headerTransparent: false,
          headerStyle: { borderBottomWidth: 0, backgroundColor: '#000' },

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,

          headerTintColor: 'white',

          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },


          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }


        }
      />
    </Stack.Navigator>
  );
}



function seventhScreenStack({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="SeventhPage"
        component={SeventhPage}

        options={{
          title: 'PetShelter',

          headerTransparent: false,
          headerStyle: { borderBottomWidth: 0, backgroundColor: '#000' },

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,

          headerTintColor: 'white',

          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },


          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }


        }
      />
    </Stack.Navigator>
  );
}


////////////////////////////////////////////////////////////////////////////////////////////////////////



function App() {


  
 

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'white',
          itemStyle: { marginVertical: 4 },

          labelStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 17
          },

        }}
        drawerStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',

        }}



      >

        {/* HOME */}
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'HOME', }}
          component={firstScreenStack}
        />

        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'ABOUT US' }}
          component={secondScreenStack} />


        <Drawer.Screen
          name="ThirdPage"
          options={{ drawerLabel: 'CATS' }}
          component={thirdScreenStack} />



        <Drawer.Screen
          name="FourthdPage"
          options={{ drawerLabel: 'DOGS' }}
          component={fourthScreenStack} />


        <Drawer.Screen
          name="FifthPage"
          options={{ drawerLabel: 'VOLUNTEER' }}
          component={fifthScreenStack} />




        <Drawer.Screen
          name="SixthPage"
          options={{ drawerLabel: 'BLOG', }}
          component={sixthScreenStack} />



        <Drawer.Screen
          name="SeventhPage"
          options={{ drawerLabel: 'CONTACT US' }}
          component={seventhScreenStack} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}



export default App;


