import * as React from 'react';
import {Button,View,Text,Image,StyleSheet,SafeAreaView,ScrollView,ImageBackground,TouchableOpacity,ViewComponent,Modal,Pressable,Dimensions,} from 'react-native';
import Carousel from "pinar";
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from "react-native-webview";
import YoutubePlayer from 'react-native-youtube-iframe';
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScaledSheet } from "react-native-size-matters";


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
  const image11 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/t3.png' };
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

          {/* ************************* PART 1  IMAGEBACKGROUND     ***************************** */}

          <ImageBackground source={image1} style={styles.imgBk1}>

            <Text
              style={styles.hLWhite}>
              ADOPT US. WE NEED YOUR HELP.
            </Text>


            <Text
              style={styles.pLWhite}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp
              or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            </Text>


            <TouchableOpacity
              style={styles.touchableLWhite}
              onPress={() => navigation.navigate('FirstPage')}
              underlayColor='#fff'>
              <Text style={styles.touchableTCBlack}>FIND A PET TO ADOPT</Text>
            </TouchableOpacity>


          </ImageBackground>




          {/* ************************* PART 2  CAROUSEL     ***************************** */}



          <Carousel style={styles.carousel}>
            <View style={styles.carouselView}>
              <Image source={image2} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.carouselView}>
              <Image source={image3} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.carouselView}>
              <Image source={image4} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.carouselView}>
              <Image source={image5} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.carouselView}>
              <Image source={image2} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.carouselView}>
              <Image source={image3} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.carouselView}>
              <Image source={image4} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.carouselView}>
              <Image source={image5} style={{ width: '100%', height: '100%' }} />
            </View>
          </Carousel>


          {/* *************************      PART 3      ***************************** */}



          <View style={styles.viewCenter3}>

            <Text style={styles.hBlack3}>Please select your favourite pet</Text>
            <TouchableOpacity
              style={styles.touchableCYellow}
              onPress={
                () => navigation.navigate('FirstPage')
              }
              underlayColor='#fff'>
              <Text style={styles.touchableTCWhite}>FIND A PET TO ADOPT</Text>
            </TouchableOpacity>
          </View>





          {/* *************************      PART 4     ***************************** */}



          <View style={{ marginTop: 50 }}>

            <Image source={image6} style={{ width: 400, height: 300 }} />
            <View>
              <Text
                style={styles.hBlack4}>
                Globally Connected by Large Network
          </Text>

              <Text
                style={styles.h2Black4}>
                We are here to listen from you deliver exellence
          </Text>
              <Text
                style={styles.pGray4}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor
          </Text>

              <TouchableOpacity
                style={styles.touchableLYellow}
                onPress={() => navigation.navigate('FirstPage')}
                underlayColor='#fff'>
                <Text style={styles.touchableTCBlack}>GET DETAILS</Text>
              </TouchableOpacity>

            </View>
          </View>



          {/* *************************      PART 5 MODAL    ***************************** */}

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

              <View style={styles.modal}>
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


          {/* *************************      PART 6     ***************************** */}

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.hBlack6}>Watch this video how they live here</Text>
            <Text style={styles.pC6}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</Text>
          </View>



          {/* *************************      PART 7    ***************************** */}




          <View style={styles.V7}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.hBlack7}>Process to adopt a pet</Text>
              <Text style={styles.h2Black7}>Who are in extremely love with eco friendly system.</Text>
            </View>
            <View style={styles.viewIcon7}>
              <Icon style={styles.icons7} name="thumbs-up" size={50} />
              <Text style={styles.hIcons7}>Pet Selection</Text>
              <Text style={styles.pIcons7}>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.</Text>


              <Icon style={styles.icons7} name="user" size={50} />
              <Text style={styles.hIcons7}>Meeting Authority</Text>
              <Text style={styles.pIcons7} >inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.</Text>

              <Icon style={styles.icons7} name="drivers-license-o" size={50} />
              <Text style={styles.hIcons7}>Adoption Form Filling</Text>
              <Text style={styles.pIcons7}>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.</Text>

              <Icon style={styles.icons7} name="magic" size={50} />
              <Text style={styles.hIcons7}>Bring to new family</Text>
              <Text style={styles.pIcons7}>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct.</Text>
            </View>
          </View>



          {/* *************************      PART 8     ***************************** */}

          <View style={{ marginTop: 40, }}>
            <Text style={styles.hBlack8}>Testimonials from our guardians.</Text>
            <Text style={styles.h2Black8}>Who are in extremely love with eco friendly system</Text>
          </View>

          {/* *************************      PART 9    ***************************** */}



          <Carousel style={styles.carousel9}>

            <View style={styles.carousel9Content}>
              <Image source={image9} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={styles.pCarousel9}>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory</Text>
              <Text style={styles.hCarousel9}> Mark Alviro Wiens</Text>
              <Text style={styles.h2Carousel9}>CEO at Google</Text>
            </View>


            <View style={styles.carousel9Content}>
              <Image source={image10} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={styles.pCarousel9}>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory</Text>
              <Text style={styles.hCarousel9}> Mark Alviro Wiens</Text>
              <Text style={styles.h2Carousel9}>CEO at Google</Text>
            </View>

            <View style={styles.carousel9Content}>
              <Image source={image11} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={styles.pCarousel9}>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory</Text>
              <Text style={styles.hCarousel9}> Mark Alviro Wiens</Text>
              <Text style={styles.h2Carousel9}>CEO at Google</Text>
            </View>

            <View style={styles.carousel9Content}>
              <Image source={image9} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={styles.pCarousel9}>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory</Text>
              <Text style={styles.hCarousel9}> Mark Alviro Wiens</Text>
              <Text style={styles.h2Carousel9}>CEO at Google</Text>
            </View>


            <View style={styles.carousel9Content}>
              <Image source={image10} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={styles.pCarousel9}>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory</Text>
              <Text style={styles.hCarousel9}> Mark Alviro Wiens</Text>
              <Text style={styles.h2Carousel9}>CEO at Google</Text>
            </View>

            <View style={styles.carousel9Content}>
              <Image source={image11} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={styles.pCarousel9}>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory</Text>
              <Text style={styles.hCarousel9}> Mark Alviro Wiens</Text>
              <Text style={styles.h2Carousel9}>CEO at Google</Text>
            </View>

            <View style={styles.carousel9Content}>
              <Image source={image9} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={styles.pCarousel9}>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory</Text>
              <Text style={styles.hCarousel9}> Mark Alviro Wiens</Text>
              <Text style={styles.h2Carousel9}>CEO at Google</Text>
            </View>


            <View style={styles.carousel9Content}>
              <Image source={image10} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={styles.pCarousel9}>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory</Text>
              <Text style={styles.hCarousel9}> Mark Alviro Wiens</Text>
              <Text style={styles.h2Carousel9}>CEO at Google</Text>
            </View>

            <View style={styles.carousel9Content}>
              <Image source={image11} style={{ width: 100, height: 100, borderRadius: 50 }} />
              <Text style={styles.pCarousel9}>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory</Text>
              <Text style={styles.hCarousel9}> Mark Alviro Wiens</Text>
              <Text style={styles.h2Carousel9}>CEO at Google</Text>
            </View>






          </Carousel>


          {/* *************************      PART 10     ***************************** */}

          <View style={{
            width: '100%',
            marginTop: 50,
          }}>
            <ImageBackground source={image12} style={styles.imgbk10}>

              <View style={styles.viewImg10}>
                <Text style={styles.hBlack10}>Want to help? Become a Volunteer</Text>
                <Text style={styles.p10}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</Text>
                <View style={{ flexDirection: 'row', flex: 1 }}>

                  <TouchableOpacity
                    style={styles.touchableL10} onPress={() => navigation.navigate('FirstPage')}
                    underlayColor='#fff'>
                    <Text style={styles.touchableTCBlack}>View pdf details</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.touchable2L10} onPress={() => navigation.navigate('FirstPage')}
                    underlayColor='#fff'>
                    <Text style={styles.touchableTCBlack}>Register now</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </ImageBackground>

          </View>




          {/* ***********************part 11************************** */}


          <View style={styles.view11}>
            <Text style={styles.hLWhite11}>About Us</Text>
            <Text style={styles.p11}>Few would argue that, despite the advanc ements off eminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

            <Text style={styles.h2LWhite11}>Useful Links</Text>

            <View style={{ flexDirection: 'row', flex: 1 }}>

              <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FirstPage')}
                underlayColor='#fff'>
                <Text style={styles.p11}>Home </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.touchableL11}
                onPress={() => navigation.navigate('FirstPage')}
                underlayColor='#fff'>
                <Text style={styles.p11}>Pricing</Text>
              </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', flex: 1 }}>
              <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FirstPage')}
                underlayColor='#fff'>
                <Text style={styles.p11}>Service</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FirstPage')}
                underlayColor='#fff'>
                <Text style={styles.p11}>Team</Text>
              </TouchableOpacity>

            </View>


            <View style={{ flexDirection: 'row', flex: 1 }}>
              <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FirstPage')}
                underlayColor='#fff'>
                <Text style={styles.p11}>About </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FirstPage')}
                underlayColor='#fff'>
                <Text style={styles.p11}>Blog</Text>
              </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', flex: 1 }}>
              <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FirstPage')}
                underlayColor='#fff'>
                <Text style={styles.p11}>Case Study </Text>
              </TouchableOpacity>
            </View>



            <Text style={styles.hLWhite11}>Contact Us</Text>

            <View style={{ marginTop: 30, flexDirection: 'row', flex: 1, width: 300 }}>
              <Icon style={{ marginLeft: 20, flex: 1 }} name="home" color="white" size={30} />
              <Text style={{ marginLeft: -189, color: 'white', flex: 1, fontSize: 17, lineHeight: 40 }}>Binghamton, New York</Text>
            </View>

            <Text style={{ marginLeft: 60, color: '#5e5a5a', flex: 1, fontSize: 17, lineHeight: 40 }}>4343 Hinkle Deegan Lake Road</Text>


            <View style={{ marginTop: 30, flexDirection: 'row', flex: 1, width: 300 }}>
              <Icon style={{ marginLeft: 20, flex: 1 }} name="phone" color="white" size={30} />
              <Text style={{ marginLeft: -189, color: 'white', flex: 1, fontSize: 17, lineHeight: 40 }}>00 (953) 9865 562</Text>
            </View>


            <Text style={{ marginLeft: 60, color: '#5e5a5a', flex: 1, fontSize: 17, lineHeight: 40 }}>Mon to Fri 9am to 6 pmd</Text>


            <View style={{ marginTop: 30, flexDirection: 'row', flex: 1, width: 300 }}>
              <Icon style={{ marginLeft: 20, flex: 1 }} name="envelope" color="white" size={30} />
              <Text style={{ marginLeft: -189, color: 'white', flex: 1, fontSize: 17, lineHeight: 40 }}>support@colorlib.com</Text>
            </View>

            <Text style={{ marginLeft: 60, color: '#5e5a5a', flex: 1, fontSize: 17, lineHeight: 40 }}>Send us your query anytime!</Text>


          </View>





          {/* *************************      PART 12    ***************************** */}

          <View style={{ backgroundColor: '#484848', width: '100%', paddingTop: 40, paddingBottom: 20 }}>


            <Text style={{ fontSize: 14, color: 'white', paddingLeft: 10 }}>Copyright ©2021 All rights reserved | This template is made</Text>


            <View style={{ flexDirection: 'row', flex: 1,paddingBottom:10, paddingTop: 5, paddingLeft: 10, width: 192 }}>
              <Text style={{ flex: .17, fontSize: 14, color: 'white' }}>with</Text>
              <Icon style={{ flex: .15}} name="heart" color="#FCCB1A" size={20} />
              <Text style={{ flex: .1, fontSize: 14, color: 'white' }}>by</Text>
              <Text style={{ flex: .4 ,fontSize: 14, color: '#FCCB1A' }}>Colorlib</Text>
            </View>


            <View style={{ flexDirection: 'row', flex: 1, width: 140, backgroundColor: '#484848', paddingLeft: 25, paddingBottom: 30 }}>

              <Icon style={{ flex: 1 }} name="facebook" color="white" size={15} />
              <Icon style={{ flex: 1 }} name="twitter" color="white" size={15} />
              <Icon style={{ flex: 1 }} name="dribbble" color="white" size={15} />
              <Icon style={{ flex: 1 }} name="behance" color="white" size={15} />

            </View>

          </View>

          {/* *************************      PART 13    ***************************** */}





        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'


  },

  ///////////////////////////////// PART 1 /////////////////////////////////////////////


  container2:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imgBk1:
  {
    height: null,
    resizeMode: "cover",
    overflow: "hidden",
  },

  hLWhite:
  {
    fontSize: 35,
    paddingLeft: 15,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 200,
  },

  pLWhite:
  {
    fontSize: 18,
    paddingLeft: 15,
    color: '#fff',
    textAlign: 'left',
    marginBottom: 20
  },

  touchableLWhite:
  {
    marginTop: 10,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 160,
    marginBottom: 60,
    borderColor: '#fff'
  },


  touchableTCBlack:
  {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },



  ///////////////////////////////// PART 2 CAROUSEL/////////////////////////////////////////////

  carousel:
  {
    marginTop: 30
  },

  carouselView:
  {
    justifyContent: "center",
    alignItems: "center",
  },


  ///////////////////////////////// PART 3  DIV TEXT CENTER  /////////////////////////////////////////////

  viewCenter3:
  {
    marginTop: 20,
    backgroundColor: '#f9f9ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 90
  },

  hBlack3:
  {
    fontSize: 40,
    textAlign: 'center',
    paddingTop: 40
  },


  touchableCYellow:
  {
    marginTop: 10,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fab700',
    borderWidth: 1,
    borderColor: '#fff'
  },

  touchableTCWhite:
  {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10
  },





  ///////////////////////////////// Part 4 /////////////////////////////////////////////


  hBlack4:
  {
    color: '#000',
    fontSize: 40,
    paddingLeft: 20,
    paddingRight: 18,
    marginBottom: 20,
    marginTop: 80
  },

  h2Black4:
  {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 15,
    color: '#000',
    marginBottom: 20
  },

  pGray4:
  {
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 18,
    color: '#5e5a5a',
    marginBottom: 20,
    lineHeight: 20
  },

  touchableLYellow: {

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

  },

  ///////////////////////////////// Part 5 MODAL/////////////////////////////////////////////

  modal:
  {
    width: 400,
    height: 200,
    marginTop: 280
  },

  ///////////////////////////////// Part 6 /////////////////////////////////////////////
  hBlack6: {

    fontSize: 20,
    paddingTop: 40

  },

  pC6:
  {

    fontSize: 16,
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    color: '#5e5a5a',
    marginTop: 30,
    marginBottom: 20

  },

  ///////////////////////////////// Part 7 /////////////////////////////////////////////

  V7: {
    backgroundColor: '#f9f9ff', marginTop: 30, paddingTop: 10
  },

  hBlack7: {
    fontSize: 30,
    paddingTop: 40,
  },

  h2Black7: {
    fontSize: 16,
    color: '#000',
  },

  viewIcon7:
  {

    paddingLeft: 20
  },


  icons7:
  {
    marginTop: 100, marginLeft: 10, marginBottom: 30, color: '#5e5a5a'
  },

  hIcons7:
  {
    color: 'black',
    fontSize: 25,
    marginBottom: 10,
    marginLeft: 10

  },

  pIcons7:
  {
    color: '#5e5a5a',
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
    color: '#5e5a5a',
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
  },

  ///////////////////////////////// Part 8 /////////////////////////////////////////////


  hBlack8: {
    fontSize: 30,
    paddingTop: 40,
    textAlign: 'center'
  },
  h2Black8: {

    fontSize: 15,
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    color: '#5e5a5a',
    marginTop: 30,
    marginBottom: 20
  },
  ///////////////////////////////// Part 9 /////////////////////////////////////////////

  carousel9:
  {
    width: 395,
    height: 400,
    borderColor: '#7599bd',
    borderWidth: .7,
    borderStyle: 'solid',
  },

  carousel9Content:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9ff"
  },

  pCarousel9: {

    fontSize: 14,
    textAlign: 'center',
    paddingRight: 50,
    paddingLeft: 50,
    color: '#5e5a5a',
    marginTop: 30,
    marginBottom: 20,
    lineHeight: 17
  },


  hCarousel9:
  {

    fontSize: 14,
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 2,
    lineHeight: 15
  },

  h2Carousel9: {

    fontSize: 14,
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    color: '#5e5a5a',
    marginBottom: 20,

  },
  ///////////////////////////////// Part 10 /////////////////////////////////////////////


  imgbk10: {
    resizeMode: "cover",
    overflow: "hidden",
  },

  viewImg10: {
    backgroundColor: 'rgba(250, 183, 0, 0.75)',
    alignContent: 'center'
  },
  hBlack10: {
    fontSize: 34,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 100,
  },

  p10: {
    fontSize: 18,
    paddingLeft: 15,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
  },

  touchableL10: {
    flex: 1,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    marginBottom: 60,
    borderColor: '#fff'
  },

  touchable2L10: {
    flex: 1,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 14,
    marginRight: 14,
    backgroundColor: '#FFF',
    borderWidth: 1,
    marginBottom: 60,
    borderColor: '#fff'
  },
  ///////////////////////////////// Part 11 /////////////////////////////////////////////

  view11:
  {
    backgroundColor: '#101010',
    width: '100%',
    paddingBottom: 90
  },

  hLWhite11: {
    fontSize: 27,
    paddingLeft: 15,

    color: '#fff',
    fontWeight: 'bold',

    marginBottom: 20,
    marginTop: 100,
  },

  p11: {
    color: '#5e5a5a',
    fontSize: 15,
    paddingLeft: 15,
    lineHeight: 20
  },


  h2LWhite11:
  {
    fontSize: 27,
    paddingLeft: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },

  touchableL11: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10,

  },
  ///////////////////////////////// Part 12 /////////////////////////////////////////////




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