import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ViewComponent
} from 'react-native';
import Carousel from "pinar";
//import Carousel from 'react-native-snap-carousel';



const FirstPage = ({ navigation }) => {

  const image1 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/banner-bg.jpg' };
  const image2 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/c1.jpg' };
  const image3 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/c2.jpg' };
  const image4 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/c3.jpg' };
  const image5 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/c4.jpg' };
  return (



    <SafeAreaView style={styles.container}>

      <ScrollView >
        <View style={styles.container2}>
          <ImageBackground source={image1} style={{
            height: null,
            resizeMode: "cover",
            overflow: "hidden",
          }}>
            <Text
              style={{
                fontSize: 35,
                paddingLeft: 15,

                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'left',
                marginBottom: 20,
                marginTop: 200,
              }}>
              ADOPT US. WE NEED YOUR HELP.
          </Text>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 15,
                color: '#fff',
                textAlign: 'left',
                marginBottom: 20
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp
              or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </Text>

            <TouchableOpacity
              style={{


                marginTop: 10,
                justifyContent: 'flex-start',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: '#fff',
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 100,
                marginBottom: 60,
                borderColor: '#fff'
              }}
              onPress={
                () => navigation.navigate('FirstPage')
              }
              underlayColor='#fff'>
              <Text style={{
                color: '#000',
                textAlign: 'center',
                paddingLeft: 10,
                paddingRight: 10
              }}>FIND A PET TO ADOPT</Text>
            </TouchableOpacity>

            {/* <Button
            onPress={
              () => navigation.navigate('SecondPage')
            }
            title="Go to Second Page"
          />
          <Button
            onPress={
              () => navigation.navigate('ThirdPage')
            }
            title="Go to Third Page"
          /> */}




          </ImageBackground>

          {/* ***************************************************************** */}



            <Carousel style={{marginTop:20}}>
              <View style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#a3c9a8"
              }}>
                <Image source={image2} style={{width:'100%',height:'100%'}}/>
              </View>
              <View style={{
              
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#84b59f"
              }}>
                <Image source={image3} style={{width:'100%',height:'100%'}}/>
              </View>
              <View style={{
              
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#69a297"
              }}>
                <Image source={image4} style={{width:'100%',height:'100%'}}/>
              </View>
              <View style={{
              
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#84b59f"
            }}>
              <Image source={image5} style={{width:'100%',height:'100%'}}/>
            </View>
            <View style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#a3c9a8"
              }}>
                <Image source={image2} style={{width:'100%',height:'100%'}}/>
              </View>
              <View style={{
              
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#84b59f"
              }}>
                <Image source={image3} style={{width:'100%',height:'100%'}}/>
              </View>
              <View style={{
              
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#69a297"
              }}>
                <Image source={image4} style={{width:'100%',height:'100%'}}/>
              </View>
              <View style={{
              
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#84b59f"
            }}>
              <Image source={image5} style={{width:'100%',height:'100%'}}/>
            </View>
            </Carousel>
{/* ******************************************************************** */}

<View style={{
  marginTop:20,
  backgroundColor:'#f9f9ff',
  alignItems:'center',
  justifyContent:'center',
  paddingTop:60,
  paddingBottom:80
}}>

  <Text style={{
    fontSize:40,
    textAlign:'center',
    paddingTop:40}}>Please select your favourite pet</Text>
  <TouchableOpacity
              style={{


                marginTop: 10,
                justifyContent: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: '#fab700',
                borderWidth: 1,
                borderColor: '#fff'
              }}
              onPress={
                () => navigation.navigate('FirstPage')
              }
              underlayColor='#fff'>
              <Text style={{
                color: '#000',
                textAlign: 'center',
                paddingLeft: 10,
                paddingRight: 10
              }}>FIND A PET TO ADOPT</Text>
            </TouchableOpacity>
</View>

          </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'

  },
  container2: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center'

  },
});

export default FirstPage;