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
  ViewComponent,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';
import Carousel from "pinar";
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from "react-native-webview";
import YoutubePlayer from 'react-native-youtube-iframe';
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");



const FirstPage = ({ navigation }) => {

  const image1 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/banner-bg.jpg' };
  const image2 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/c1.jpg' };
  const image3 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/c2.jpg' };
  const image4 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/c3.jpg' };
  const image5 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/c4.jpg' };
  const image6 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/about-img.jpg' };

  const image7 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/video-bg.jpg' };


  const image8 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/play-btn.png' };

  const image9 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/t1.png' };
  const image10 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/t2.png' };
  const image11 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/t1.png' };
  const image12 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/call-bg.jpg' };



  const [dimensions, setDimensions] = useState({ window, screen });
  const [mode, setMode] = useState("portrait");
  const [modalVisible, setModalVisible] = useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [playing, setPlaying] = useState(false);

  const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape")

    } else {
      setMode("portrait")

    }
    console.log(mode)
  };

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange),
        modeMaker();
    };

  });



  return (



    <SafeAreaView style={styles.container}>

      <ScrollView >
        <View style={styles.container2}>

          {/* *************************      PART 1      ***************************** */}

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
          </ImageBackground>


          {/* *************************      PART 2      ***************************** */}



          <Carousel style={{ marginTop: 20 }}>
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#a3c9a8"
            }}>
              <Image source={image2} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#84b59f"
            }}>
              <Image source={image3} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#69a297"
            }}>
              <Image source={image4} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#84b59f"
            }}>
              <Image source={image5} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#a3c9a8"
            }}>
              <Image source={image2} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#84b59f"
            }}>
              <Image source={image3} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#69a297"
            }}>
              <Image source={image4} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#84b59f"
            }}>
              <Image source={image5} style={{ width: '100%', height: '100%' }} />
            </View>
          </Carousel>


          {/* *************************      PART 3      ***************************** */}

          <View style={{
            marginTop: 20,
            backgroundColor: '#f9f9ff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 60,
            paddingBottom: 80
          }}>

            <Text style={{
              fontSize: 40,
              textAlign: 'center',
              paddingTop: 40
            }}>Please select your favourite pet</Text>
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

          {/* *************************      PART 4     ***************************** */}

          <View>

            <Image source={image6} style={{ width: 400, height: 300 }} />
            <View>
              <Text
                style={{
                  fontSize: 40,
                  paddingLeft: 20,
                  paddingRight: 18,
                  marginBottom: 20,
                  marginTop: 80,
                }}>
                Globally Connected by Large Network
          </Text>

              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 20,
                  paddingRight: 15,
                  color: '#000',
                  marginBottom: 20
                }}>
                We are here to listen from you deliver exellence
          </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingLeft: 20,
                  paddingRight: 18,
                  color: '#5e5a5a',
                  marginBottom: 20
                }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor
          </Text>

              <TouchableOpacity
                style={{


                  marginTop: 10,
                  justifyContent: 'flex-start',
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor: '#fab700',
                  borderWidth: 1,
                  marginLeft: 17,
                  marginRight: 220,
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
                }}>GET DETAILS</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* *************************      PART 5 VIDEO     ***************************** */}

          <Modal
            animationType="fade"
            transparent={false}
            visible={modalVisible}
            supportedOrientations={['landscape']}
            onRequestClose={() => {
              a
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <View style={{ width: 400, height: 200, marginTop: 280, }}>
                <WebView
                  source={{ html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ARA0AxrnHdM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                />
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>

            </View>
          </Modal>

          <View style={{ alignContent: 'center' }} >
            <ImageBackground source={image7} style={{ width: 360, height: 300 }}>
              <Icon style={{ marginTop: 100, marginLeft: 130 }} name="play" color="white" size={100} onPress={() => setModalVisible(true)} />
            </ImageBackground>

          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{
              fontSize: 20,
              paddingTop: 40
            }}>Watch this video how they live here</Text>
            <Text
              style={{

                fontSize: 16,
                textAlign: 'center',
                paddingRight: 10,
                paddingLeft: 10,
                color: '#5e5a5a',
                marginTop: 30,
                marginBottom: 20
              }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</Text>
          </View>

          {/* *************************      PART 6     ***************************** */}
          <View style={{ backgroundColor: '#f9f9ff', marginTop: 30 }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                fontSize: 30,
                paddingTop: 40,
              }}>Process to adopt a pet</Text>
              <Text style={{
                fontSize: 16,
                color: '#000',
              }}>Who are in extremely love with eco friendly system.</Text>
            </View>
            <View style={{paddingLeft:20}}>
              <Icon style={{ marginTop: 100, marginLeft: 10,marginBottom:30,color:'#5e5a5a'}} name="thumbs-up" size={50} />
              <Text style={{ 
                color:'black',
                fontSize:25,
                marginBottom:10,
                marginLeft: 10

              }}>Pet Selection</Text>
              <Text style={{ 
                color:'#5e5a5a',
                fontSize:15,
                marginBottom:10,
                marginLeft: 10,}}>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.</Text>


              <Icon style={{ marginTop: 100, marginLeft: 10,marginBottom:30,color:'#5e5a5a' }} name="user"  size={50} />
              <Text style={{ 
                color:'black',
                fontSize:22,
                marginBottom:10,
                marginLeft: 10,

              }}>Meeting Authority</Text>
              <Text style={{ 
                color:'#5e5a5a',
                fontSize:15,
                marginBottom:10,
                marginLeft: 10,}} >inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.</Text>

              <Icon style={{ marginTop: 100, marginLeft: 10,marginBottom:30,color:'#5e5a5a'}} name="drivers-license-o"  size={50} />
              <Text style={{ 
                color:'black',
                fontSize:25,
                marginBottom:10,
                marginLeft: 10,

              }}>Adoption Form Filling</Text>
              <Text style={{ 
                color:'#5e5a5a',
                fontSize:15,
                marginBottom:10,
                marginLeft: 10,}}>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.</Text>

              <Icon style={{ marginTop: 100, marginLeft: 10,marginBottom:30,color:'#5e5a5a'}} name="magic" size={50} />
              <Text style={{ 
                color:'black',
                fontSize:25,
                marginBottom:10,
                marginLeft: 10,

              }}>Bring to new family</Text>
              <Text style={{ 
                color:'#5e5a5a',
                fontSize:15,
                marginBottom:10,
                marginLeft: 10,}}>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.</Text>
            </View>

          </View>

          {/* *************************      PART 7     ***************************** */}

          <View>
            <Text>
              Testimonials from our guardians.
</Text>
            <Text>
              Who are in extremely love with eco friendly system
</Text>


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
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 20,
  },
});

export default FirstPage;