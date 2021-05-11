import 'react-native-gesture-handler';
import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';
import SeventhPage from './pages/SeventhPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
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
          title: 'PetShelter', //Set Header Title

            
         
          headerContainerStyle: {
            backgroundColor:'rgba(0, 0, 0, 0.7)',
    
          },


          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,

          headerTintColor: 'white', //Set Header text color

          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },

          headerTransparent: true,

         
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
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
    <Stack.Navigator initialRouteName="SecondPage">
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}

        options={{
          title: 'PetShelter', //Set Header Title

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {

          },

          headerTintColor: 'white', //Set Header text color
          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style

          },
        }}
      />
    </Stack.Navigator>
  );
}


function thirdScreenStack({navigation }) {
  return (
    <Stack.Navigator initialRouteName="ThirdPage">
      <Stack.Screen
        name="ThirddPage"
        component={ThirdPage}

        options={{
          title: 'PetShelter', //Set Header Title

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {

          },

          headerTintColor: 'white', //Set Header text color
          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style

          },
        }}
      />
    </Stack.Navigator>
  );
}


function fourthScreenStack({navigation }) {
  return (
    <Stack.Navigator initialRouteName="FourthPage">
      <Stack.Screen
        name="FourthdPage"
        component={FourthPage}

        options={{
          title: 'PetShelter', //Set Header Title

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {

          },

          headerTintColor: 'white', //Set Header text color
          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style

          },
        }}
      />
    </Stack.Navigator>
  );
}



function fifthScreenStack({navigation }) {
  return (
    <Stack.Navigator initialRouteName="FifthPage">
      <Stack.Screen
        name="FifthdPage"
        component={FifthPage}

        options={{
          title: 'PetShelter', //Set Header Title

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {

          },

          headerTintColor: 'white', //Set Header text color
          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style

          },
        }}
      />
    </Stack.Navigator>
  );
}




function sixthScreenStack({navigation }) {
  return (
    <Stack.Navigator initialRouteName="SixthPage">
      <Stack.Screen
        name="SixthPage"
        component={SixthPage}

        options={{
          title: 'PetShelter', //Set Header Title

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {

          },

          headerTintColor: 'white', //Set Header text color
          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style

          },
        }}
      />
    </Stack.Navigator>
  );
}



function seventhScreenStack({navigation }) {
  return (
    <Stack.Navigator initialRouteName="SeventhPage">
      <Stack.Screen
        name="SeventhPage"
        component={SeventhPage}

        options={{
          title: 'PetShelter', //Set Header Title

          headerRight: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
          headerStyle: {

          },

          headerTintColor: 'white', //Set Header text color
          headerRightContainerStyle: {
            paddingRight: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style

          },
        }}
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
              fontWeight:'bold',
              fontSize:17
            },

        }}
        drawerStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
      
        }}



        
      
        >

        {/* HOME */}
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel:'HOME', }}
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
          options={{ drawerLabel: 'Blog Home' , }}
          component={sixthScreenStack} />

      
        
        <Drawer.Screen
          name="SeventhPage"
          options={{ drawerLabel: 'Blog Single' }}
          component={seventhScreenStack} />

  {/*      
        <Drawer.Screen
          name="EighthPage"
          options={{ drawerLabel: 'DROPDOWN' }}
          component={eighthScreenStack} />  */}
          
        

      </Drawer.Navigator>
    </NavigationContainer>
  );
}



export default App;


