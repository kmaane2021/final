import * as React from 'react';
import { CheckBox, TextInput, Button, View, Text, Image, StyleSheet, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, ViewComponent, Modal, Pressable, Dimensions, } from 'react-native';
import Carousel from "pinar";
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from "react-native-webview";
import YoutubePlayer from 'react-native-youtube-iframe';
import MapView from 'react-native-maps';
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScaledSheet } from "react-native-size-matters";



const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const SeventhPage = ({ navigation }) => {

    const image1 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/banner-bg.jpg' };
    const image2 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/blog/cat-widget1.jpg' };
    const image3 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/blog/cat-widget2.jpg' };
    const image4 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/blog/cat-widget3.jpg' };
    const image5 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/blog/feature-img1.jpg' };
    const image6 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/blog/feature-img2.jpg' };
    const image7 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/blog/feature-img3.jpg' };
    const image8 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/blog/feature-img4.jpg' };
    const image9 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/blog/feature-img5.jpg' };



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
                        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>


                            <View style={styles.view0}>
                                <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FirstPage')} underlayColor='#fff'>
                                    <Text style={mode === "portrait" ? styles.p0 : styles.p02}>Home</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('SecondPage')} underlayColor='#fff'>
                                    <Text style={mode === "portrait" ? styles.p0 : styles.p02}>About </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('ThirdPage')} underlayColor='#fff'>
                                    <Text style={mode === "portrait" ? styles.p0 : styles.p02}>Cats</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('FourthdPage')} underlayColor='#fff'>
                                    <Text style={mode === "portrait" ? styles.p0 : styles.p02}>Dogs</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableVolunteer} onPress={() => navigation.navigate('FifthPage')} underlayColor='#fff'>
                                    <Text style={mode === "portrait" ? styles.p0 : styles.p02}>Volunteer</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('SixthPage')} underlayColor='#fff'>
                                    <Text style={mode === "portrait" ? styles.p0 : styles.p02}>Blog</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('SeventhPage')} underlayColor='#fff'>
                                    <Text style={mode === "portrait" ? styles.p0 : styles.p02}>Contact</Text>
                                </TouchableOpacity>


                            </View>




                            <View style={styles.viewPart1}>
                                <View >
                                    <Text style={styles.h1}> Contact Us</Text>
                                </View>

                                <View style={styles.viewTouchable1}>
                                    <View style={{ flex: .4 }}>
                                        <TouchableOpacity

                                            onPress={() => navigation.navigate('FirstPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.touchableText1}>Home</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ flex: .1 }}>
                                        <Icon style={styles.icon1} name="arrow-right" color='white' size={30} />
                                    </View>


                                    <View style={{ flex: .4 }}>

                                        <TouchableOpacity

                                            onPress={() => navigation.navigate('SeventhPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.touchableText1}>Contact Us</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>

                        </View>
                    </ImageBackground>

                    {/* ************************18*************************** */}
                    <View style={styles.container18}>
                        <MapView style={styles.map18} />
                    </View>

                    {/* /////////////19 */}

                    <View style={styles.v19}>
                        <View style={styles.viewContact19}>
                            <Icon style={styles.iconContact19} name="home" color="orange" size={30} />
                            <Text style={styles.iconText19}>Binghamton, New York</Text>
                        </View>

                        <Text style={styles.txtP19}>4343 Hinkle Deegan Lake Road</Text>


                        <View style={styles.viewContact19}>
                            <Icon style={styles.iconContact19} name="phone" color="orange" size={30} />
                            <Text style={styles.iconText19}>00 (953) 9865 562</Text>
                        </View>


                        <Text style={styles.txtP19}>Mon to Fri 9am to 6 pmd</Text>


                        <View style={styles.viewContact19}>
                            <Icon style={styles.iconContact19} name="envelope" color="orange" size={30} />
                            <Text style={styles.iconText19}>support@colorlib.com</Text>
                        </View>

                        <Text style={styles.txtP19}>Send us your query anytime!</Text>

                    </View>



                    {/* /***************************20 ******************/}


                    <View style={styles.view20}>

                        <View>
                            
                            <TextInput placeholder={'Enter your name'} style={styles.input}
                            />
                        </View>

                        <View>
                          
                            <TextInput placeholder={'Enter your subject'} style={styles.input}
                            />
                        </View>

                        <View>
                          
                            <TextInput placeholder={'Enter your subject'} style={styles.input} />
                           
                        </View>

                    
                        <View>
                           
                            <View style={styles.textAreaContainer20} >
                                <TextInput
                                    style={styles.textArea20}
                                    underlineColorAndroid="transparent"
                                    placeholder="Message"
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={true}
                                />
                            </View>

                            <View style={styles.viewTouchable20}>

                                <TouchableOpacity
                                    style={styles.touchable20}
                                    onPress={
                                        () => navigation.navigate('FifthPage')
                                    }
                                    underlayColor='#fff'>
                                    <Text style={styles.touchableT20}>Send Message</Text>
                                </TouchableOpacity>

                            </View>
                        </View>


                    </View>







                    {/* ***********************PART 11************************** */}


                    {mode === "portrait" ? <View style={styles.view11}>

                        <View>
                            <Text style={styles.hLWhite11}>About Us</Text>
                            <Text style={styles.p11}>Few would argue that, despite the advanc ements off eminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                        </View>


                        <View>
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

                        </View>

                        <View>

                            <Text style={styles.hLWhite11}>Contact Us</Text>

                            <View style={styles.viewContact11}>
                                <Icon style={styles.iconContact11} name="home" color="white" size={30} />
                                <Text style={styles.iconText11}>Binghamton, New York</Text>
                            </View>

                            <Text style={styles.txtP11}>4343 Hinkle Deegan Lake Road</Text>


                            <View style={styles.viewContact11}>
                                <Icon style={styles.iconContact11} name="phone" color="white" size={30} />
                                <Text style={styles.iconText11}>00 (953) 9865 562</Text>
                            </View>


                            <Text style={styles.txtP11}>Mon to Fri 9am to 6 pmd</Text>


                            <View style={styles.viewContact11}>
                                <Icon style={styles.iconContact11} name="envelope" color="white" size={30} />
                                <Text style={styles.iconText11}>support@colorlib.com</Text>
                            </View>

                            <Text style={styles.txtP11} >Send us your query anytime!</Text>


                        </View>


                    </View> :

                        <View style={styles.view11}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                {/* First colomun  */}
                                <View style={{ flex: .5 }}>
                                    <Text style={styles.hLWhite11}>About Us</Text>
                                    <Text style={styles.p112}>Few would argue that, despite the advanc ements off eminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                </View>

                                {/* second colomun */}
                                <View style={{ flex: .5, }}>
                                    <Text style={styles.h2LWhite112}>Useful Links</Text>
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

                                </View>

                                <View>

                                </View>
                            </View>

                            {/* row */}

                            <Text style={styles.hLWhite11}>Contact Us</Text>

                            <View style={styles.viewContact11}>
                                <Icon style={styles.iconContact11} name="home" color="white" size={30} />
                                <Text style={styles.iconText11}>Binghamton, New York</Text>
                            </View>

                            <Text style={styles.txtP11}>4343 Hinkle Deegan Lake Road</Text>


                            <View style={styles.viewContact11}>
                                <Icon style={styles.iconContact11} name="phone" color="white" size={30} />
                                <Text style={styles.iconText11}>00 (953) 9865 562</Text>
                            </View>


                            <Text style={styles.txtP11}>Mon to Fri 9am to 6 pmd</Text>


                            <View style={styles.viewContact11}>
                                <Icon style={styles.iconContact11} name="envelope" color="white" size={30} />
                                <Text style={styles.iconText11}>support@colorlib.com</Text>
                            </View>

                            <Text style={styles.txtP11}>Send us your query anytime!</Text>





                        </View>}





                    {/* *************************      PART 12    ***************************** */}

                    {mode === "portrait" ? <View style={styles.view12}>


                        <Text style={styles.txt12}>Copyright ©2021 All rights reserved | This template is made</Text>


                        <View style={styles.viewTextIcon12}>
                            <Text style={{ flex: .17, color: 'white' }}>with</Text>
                            <Icon style={{ flex: .15 }} name="heart" color="#FCCB1A" size={20} />
                            <Text style={{ flex: .1, color: 'white' }}>by</Text>
                            <Text style={{ flex: .4, color: '#FCCB1A' }}>Colorlib</Text>
                        </View>


                        <View style={styles.icons12}>

                            <Icon style={{ flex: 1 }} name="facebook" color="white" size={15} />
                            <Icon style={{ flex: 1 }} name="twitter" color="white" size={15} />
                            <Icon style={{ flex: 1 }} name="dribbble" color="white" size={15} />
                            <Icon style={{ flex: 1 }} name="behance" color="white" size={15} />

                        </View>

                    </View> :

                        <View style={styles.view122}>

                            <View style={{ flex: .7 }}>

                                <Text style={styles.txt122}>Copyright ©2021 All rights reserved | This </Text>
                                <View style={styles.viewTextIcon122}>
                                    <Text style={{ flex: .6, color: 'white' }}> template is made with</Text>
                                    <Icon style={{ flex: .1 }} name="heart" color="#FCCB1A" size={20} />
                                    <Text style={{ flex: .1, color: 'white' }}>by</Text>
                                    <Text style={{ flex: .2, color: '#FCCB1A' }}>Colorlib</Text>
                                </View>

                            </View>



                            <View style={{ flex: .3, marginLeft: 100 }}>
                                <View style={styles.icons122}>

                                    <Icon style={{ flex: 1 }} name="facebook" color="white" size={15} />
                                    <Icon style={{ flex: 1 }} name="twitter" color="white" size={15} />
                                    <Icon style={{ flex: 1 }} name="dribbble" color="white" size={15} />
                                    <Icon style={{ flex: 1 }} name="behance" color="white" size={15} />

                                </View>
                            </View>

                        </View>}






                </View>
            </ScrollView>
        </SafeAreaView >

    );
}

const styles = ScaledSheet.create({

    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////    STYLE      /////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    container:
    {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff'
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    container2:
    {
        flex: 1,
        backgroundColor:'#f9f9ff'
        
    },


    touchable0: {
        marginTop: "10@s",
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: "10@s",
        paddingBottom: "10@s"

    },
    touchableVolunteer: {
        marginTop: "10@s",
        flex: 1.4,
        justifyContent: 'flex-start',
        paddingTop: "10@s",
        paddingBottom: "10@s"

    },





    view0: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: '5@s',
        paddingRight: '5@s'

    },

    p0: {

        fontSize: '12@s',
        fontWeight: 'bold',
        marginLeft: '3@s',
        textDecorationLine: 'underline',

    },

    p02: {

        fontSize: '17@s',
        fontWeight: 'bold',
        marginLeft: '5@s',
        textDecorationLine: 'underline',

    },

    imgBk1:
    {
        height: null,
        width: "100%",
        resizeMode: "cover",
        overflow: "hidden",
    },

    h1:
    {
        fontSize: "37@s",
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: "15@s",
        marginTop: "200@s",
    },



    touchableText1:
    {
        color: 'white',
        fontSize: '19@s',
        textAlign: 'center'
    },

    viewTouchable1:
    {
        //width: '250@s',
        marginLeft: '40@s',
        marginRight: '40@s',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '90@s'
    },

    viewPart1:

    {
        justifyContent: 'center',
        marginBottom: '60@s',


    },





    ///////////////////////////////// Part 11 /////////////////////////////////////////////

    view11:
    {
        backgroundColor: '#101010',
        width: '100%',
        paddingBottom: "90@s"
    },

    hLWhite11: {
        fontSize: "27@s",
        paddingLeft: "15@s",

        color: '#fff',
        fontWeight: 'bold',

        marginBottom: "20@s",
        marginTop: "100@s",
    },

    p11: {
        color: '#5e5a5a',
        fontSize: "15@s",
        paddingLeft: "15@s",
        lineHeight: "20@s"
    },

    p112: {
        color: '#5e5a5a',
        fontSize: "15@s",
        paddingLeft: "15@s",
        paddingRight: '18@s',
        lineHeight: "20@s"
    },


    h2LWhite11:
    {
        fontSize: "27@s",
        paddingLeft: "15@s",
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: "20@s",
        marginTop: "50@s"
    },


    h2LWhite112:
    {
        fontSize: "27@s",
        paddingLeft: "15@s",
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: "10@s",
        marginTop: "100@s"
    },

    touchableL11: {
        marginTop: "10@s",
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: "10@s",
        paddingBottom: "10@s"

    },

    txtP11: {
        marginLeft: '60@s',
        color: '#5e5a5a',
        flex: 1,
        fontSize: '17@s',
        lineHeight: 40
    },

    viewContact11:
    {
        marginTop: '30@s',
        flexDirection: 'row',
        flex: 1,
        width: '300@s'
    },

    iconContact11:
    {
        marginLeft: '20@s',
        flex: 1
    },
    iconText11:
    {
        marginLeft: '-189@s',
        color: 'white',
        flex: 1,
        fontSize: '17@s',
        lineHeight: 40
    },


    ///////////////////////////////// Part 12 /////////////////////////////////////////////


  view12:
  {
    backgroundColor: '#484848',
    width: '100%',
    paddingTop: '40@s',
    paddingBottom: '20@s'
  },

  txt12:
  {
    fontSize: '12@s',
    color: 'white',
    paddingLeft: '10@s'
  },

  viewTextIcon12:
  {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: '10@s',
    paddingTop: '5@s',
    paddingLeft: '10@s',
    width: '192@s',
    fontSize: '12@s'
  },

  icons12:
  {
    flexDirection: 'row',
    flex: 1,
    width: '140@s',
    backgroundColor: '#484848',
    paddingLeft: '25@s',
    paddingBottom: '30@s'
  },
  view122:
  {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#484848',
    width: '100%',
    paddingTop: '40@s',
    paddingBottom: '20@s'
  },

  txt122:
  {
    fontSize: '12@s',
    color: 'white',
    paddingLeft: '10@s'
  },

  viewTextIcon122:
  {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: '10@s',
    paddingTop: '5@s',
    paddingLeft: '10@s',
    width: '250@s',
    fontSize: '12@s'
  },

  icons122:
  {
    flexDirection: 'row',
    flex: 1,
    width: '140@s',
    backgroundColor: '#484848',
    paddingLeft: '25@s',
    paddingBottom: '30@s'
  },

    /////////////////    PART13    ///////////////////////////////////

    img13:
    {
        height: "500@s",
        width: "100%",
        paddingLeft: '5@s',
        paddingRight: '5@s',

        flex: 1
    },

    viewImg13:
    {
        marginTop: '50@s',
        flexDirection: 'column',
        flex: 1,
        paddingLeft: '10@s',
        paddingRight: '10@s',
    },

    viewImg132:
    {
        marginTop: '50@s',
        flexDirection: 'column',
        flex: .5,
        paddingLeft: '10@s',
        paddingRight: '10@s',
        paddingTop: '10@s',
        paddingBottom: '10@s',
    },

    view13:
    {
        marginBottom: '5@s',
        marginTop: '20@s'
    },
    //////////////////////18//////////////////////////////

    container18: {
        flex: 1,
        marginTop: '60@s',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map18: {
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,

        width: '100%',
        height: '300@s'
    },



    ////////////////19//////////////////////
    viewContact19:
    {
        marginTop: '30@s',
        flexDirection: 'row',
        flex: 1,
        width: '300@s'
    },

    iconContact19:
    {
        marginLeft: '20@s',
        flex: 1
    },
    iconText19:
    {
        marginLeft: '-189@s',
        color: 'black',
        flex: 1,
        fontSize: '17@s',
        lineHeight: 40
    },

    txtP19: {
        marginLeft: '60@s',
        color: '#5e5a5a',
        flex: 1,
        fontSize: '17@s',
        lineHeight: 40
    },

    v19: {
        marginBottom: '80@s',
        marginTop: '80@s'
    },

    // //////////////////////20 //////////////////////////////////

    view20:
    {
        paddingRight: '15@s',
        paddingLeft: '15@s',
        marginBottom: '80@s',
    },


    input: {
        width: '100%',
        height: '44@s',
        padding: '10@s',
        marginTop: '15@s',
        marginBottom: '10@s',
        borderColor: '#ced4da',
        borderWidth: 1,
        borderRadius: 10

    },


    txt20:
    {
        fontWeight: 'bold',

    },

    


    textAreaContainer20: {
        borderColor: '#ced4da',
        borderWidth: 1,
        padding: '5@s',
        borderRadius: 20,
        marginTop: '10@s'
    },
    textArea20: {
        height: '150@s',
        justifyContent: "flex-start"
    },

    touchable20:
  {
    marginTop: "10@s",
    justifyContent: 'flex-end',
    width:'200@s',
    
    paddingTop: "10@s",
    paddingBottom: "10@s",
    backgroundColor: '#fab700',
    borderRadius:50
  },

  touchableT20:
  {
    color: '#fff',
    textAlign: 'center',
    fontSize: '16@s',
    fontWeight: 'bold',
    paddingLeft: "20@s",
    paddingRight: "20@s",
   
  },
  viewTouchable20:
  {
      justifyContent:'flex-end',
      alignItems:'flex-end',
     
  }


});

export default SeventhPage;