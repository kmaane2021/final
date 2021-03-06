import * as React from 'react';
import { CheckBox, TextInput, View, Text, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, Dimensions, } from 'react-native';
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScaledSheet } from "react-native-size-matters";


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const FifthPage = ({ navigation }) => {

    const image1 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/banner-bg.jpg' };
    


    const [dimensions, setDimensions] = useState({ window, screen });
    const [mode, setMode] = useState("portrait");

    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    const [isSelected7, setSelection7] = useState(false);

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
                    
              <View style={styles.view0}>
                <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FirstPage')} underlayColor='#fff'>
                  <Text style={mode === "portrait" ? styles.p0 : styles.p02 }>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('SecondPage')} underlayColor='#fff'>
                  <Text  style={mode === "portrait" ? styles.p0 : styles.p02 }>About </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('ThirdPage')} underlayColor='#fff'>
                  <Text  style={mode === "portrait" ? styles.p0 : styles.p02 }>Cats</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('FourthdPage')} underlayColor='#fff'>
                  <Text  style={mode === "portrait" ? styles.p0 : styles.p02 }>Dogs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableVolunteer} onPress={() => navigation.navigate('FifthPage')} underlayColor='#fff'>
                  <Text  style={mode === "portrait" ? styles.p0 : styles.p02 }>Volunteer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('SixthPage')} underlayColor='#fff'>
                  <Text  style={mode === "portrait" ? styles.p0 : styles.p02 }>Blog</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable0} onPress={() => navigation.navigate('SeventhPage')} underlayColor='#fff'>
                  <Text  style={mode === "portrait" ? styles.p0 : styles.p02 }>Contact</Text>
                </TouchableOpacity>


              </View>


                        <View style={styles.viewPart1}>
                            <View >
                                <Text style={styles.h1}>Become a Volunteer</Text>
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

                                        onPress={() => navigation.navigate('FifthPage')}
                                        underlayColor='#fff'>
                                        <Text style={styles.touchableText1}>Become a Volunteer</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </ImageBackground>


                    {/* **************************part 14 ********************************** */}
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text
                            style={styles.hBlack14}>
                            Want to help? Become a Volunteer
          </Text>

                        <Text
                            style={styles.pGray14}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </Text>
                    </View>

                    {/* ***********************Part 15 ******************************** */}
                    <View style={styles.view15}>

                        <View>
                            <Text style={styles.txt15}>First Name</Text>
                            <TextInput placeholder={'First Name'} style={styles.input}
                            />
                        </View>

                        <View>
                            <Text style={styles.txt15}>Last Name</Text>
                            <TextInput placeholder={'Last Name'} style={styles.input}
                            />
                        </View>

                        <View>
                            <Text style={styles.txt15}>Address</Text>
                            <TextInput placeholder={'Your Address'} style={styles.input} />
                            <TextInput style={styles.input} />
                        </View>


                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={styles.inputRow15}>
                                <Text style={styles.txt15}>City</Text>
                                <TextInput placeholder={'Select City'} style={styles.input} />

                            </View>

                            <View style={styles.inputRow15}>
                                <Text style={styles.txt15}>State</Text>
                                <TextInput placeholder={'Select State'} style={styles.input} />
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={styles.inputRow15}>
                                <Text style={styles.txt15}>Country</Text>
                                <TextInput placeholder={'Select Coutry'} style={styles.input} />

                            </View>

                            <View style={styles.inputRow15}>
                                <Text style={styles.txt15}>Postal Code</Text>
                                <TextInput placeholder={'Postal Code'} style={styles.input} />
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={styles.inputRow15}>
                                <Text style={styles.txt15}>Email Address</Text>
                                <TextInput placeholder={'Email Address'} style={styles.input} />

                            </View>

                            <View style={styles.inputRow15}>
                                <Text style={styles.txt15}>Phone Number</Text>
                                <TextInput placeholder={'Phone Number'} style={styles.input} />
                            </View>

                        </View>

                        <Text style={styles.txtDays15}> Which days you can be volunteer?</Text>

                        {mode === "portrait" ? <View>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Monday</Text>
                                </View>


                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isSelected2}
                                        onValueChange={setSelection2}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Tuesday</Text>

                                    <CheckBox
                                        value={isSelected3}
                                        onValueChange={setSelection3}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Wednesday</Text>

                                    <CheckBox
                                        value={isSelected4}
                                        onValueChange={setSelection4}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Thursday</Text>
                                </View>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        value={isSelected5}
                                        onValueChange={setSelection5}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Friday</Text>




                                    <CheckBox
                                        value={isSelected6}
                                        onValueChange={setSelection6}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Saturday</Text>


                                    <CheckBox
                                        value={isSelected7}
                                        onValueChange={setSelection7}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.label}>Sunday</Text>


                                </View>




                            </View>
                        </View> :


                            <View>

                                <View style={{ flexDirection: 'row', flex: 1 }}>

                                    <View style={styles.checkboxContainer}>
                                        <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={styles.checkbox}
                                        />
                                        <Text style={styles.label}>Monday</Text>

                                        <CheckBox
                                            value={isSelected2}
                                            onValueChange={setSelection2}
                                            style={styles.checkbox}
                                        />
                                        <Text style={styles.label}>Tuesday</Text>

                                        <CheckBox
                                            value={isSelected3}
                                            onValueChange={setSelection3}
                                            style={styles.checkbox}
                                        />
                                        <Text style={styles.label}>Wednesday</Text>

                                        <CheckBox
                                            value={isSelected4}
                                            onValueChange={setSelection4}
                                            style={styles.checkbox}
                                        />
                                        <Text style={styles.label}>Thursday</Text>

                                        <CheckBox
                                            value={isSelected5}
                                            onValueChange={setSelection5}
                                            style={styles.checkbox}
                                        />
                                        <Text style={styles.label}>Friday</Text>




                                        <CheckBox
                                            value={isSelected6}
                                            onValueChange={setSelection6}
                                            style={styles.checkbox}
                                        />
                                        <Text style={styles.label}>Saturday</Text>


                                        <CheckBox
                                            value={isSelected7}
                                            onValueChange={setSelection7}
                                            style={styles.checkbox}
                                        />
                                        <Text style={styles.label}>Sunday</Text>


                                    </View>

                                </View>
                            </View>}

                        <View>
                            <Text style={styles.txt15}>Volunteer Note</Text>

                            <View style={styles.textAreaContainer15} >
                                <TextInput
                                    style={styles.textArea15}
                                    underlineColorAndroid="transparent"
                                    placeholder="Write message"
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={true}
                                />
                            </View>

                            <View style={styles.viewTouchable15}>

                            <TouchableOpacity
                                style={styles.touchable15}
                                onPress={
                                    () => navigation.navigate('FifthPage')
                                }
                                underlayColor='#fff'>
                                <Text style={styles.touchableT15}>Send message</Text>
                            </TouchableOpacity>

                            </View>
                        </View>


                    </View>



                    {/* ***********************part 11************************** */}


                    {mode === "portrait" ? <View style={styles.view11}>

                        <View>
                            <Text style={styles.hLWhite11}>About Us</Text>
                            <Text style={styles.p11}>Few would argue that, despite the advanc ements off eminism over the past three decades, women still face a double standard when it comes to their behavior. While men???s borderline-inappropriate behavior. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
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
                                <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FifthPage')}
                                    underlayColor='#fff'>
                                    <Text style={styles.p11}>Service</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FifthPage')}
                                    underlayColor='#fff'>
                                    <Text style={styles.p11}>Team</Text>
                                </TouchableOpacity>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('SecondPage')}
                                    underlayColor='#fff'>
                                    <Text style={styles.p11}>About </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('SixthPage')}
                                    underlayColor='#fff'>
                                    <Text style={styles.p11}>Blog</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FifthPage')}
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
                                    <Text style={styles.p112}>Few would argue that, despite the advanc ements off eminism over the past three decades, women still face a double standard when it comes to their behavior. While men???s borderline-inappropriate behavior. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
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
                                        <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FifthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p11}>Service</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FifthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p11}>Team</Text>
                                        </TouchableOpacity>

                                    </View>


                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('SecondPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p11}>About </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p11}>Blog</Text>
                                        </TouchableOpacity>
                                    </View>


                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('FifthPage')}
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


                        <Text style={styles.txt12}>Copyright ??2021 All rights reserved | This template is made</Text>


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

                                <Text style={styles.txt122}>Copyright ??2021 All rights reserved | This </Text>
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
        </SafeAreaView>

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
      
    },
    container2:
    {
        flex: 1,
      
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
        flexDirection:'row',
        flex:1,
        backgroundColor:'white',
        paddingLeft:'5@s',
        paddingRight:'5@s'
    
      },
    
      p0:{
    
        fontSize:'12@s',
        fontWeight:'bold',
        marginLeft:'3@s',
        textDecorationLine: 'underline',
    
      },
    
      p02:{
    
        fontSize:'17@s',
        fontWeight:'bold',
        marginLeft:'5@s',
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
        fontSize: "40@s",
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
        marginBottom: '30@s',


    },




    ///////////////////////////////// PART 3  DIV TEXT CENTER  /////////////////////////////////////////////

    viewCenter3:
    {
        marginTop: "80@s",
        marginBottom: "80@s",
        backgroundColor: '#f9f9ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: "30@s",
        paddingBottom: "30@s"
    },

    viewCenter32:
    {
        marginTop: "80@s",
        marginBottom: "80@s",
        marginLeft: "15@s",
        marginRight: "15@s",
        backgroundColor: '#f9f9ff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: "30@s",
        paddingBottom: "30@s"
    },

    hBlack3:
    {
        fontSize: "32@s",
        textAlign: 'center',
        paddingTop: "40@s"
    },


    touchableCYellow:
    {
        marginTop: "10@s",
        justifyContent: 'center',
        paddingTop: "10@s",
        paddingBottom: "10@s",
        backgroundColor: '#fab700',
    },

    touchableTCWhite:
    {
        color: '#fff',
        textAlign: 'center',
        fontSize: '16@s',
        fontWeight: 'bold',
        paddingLeft: "20@s",
        paddingRight: "20@s"
    },





    ///////////////////////////////// Part 4 /////////////////////////////////////////////


    view4:
    {
        marginBottom: "150@s"
    },

    img4:
    {
        width: "100%",
        height: "290@s"
    },

    img42:
    {
        width: "100%",
        height: "440@s"
    },
    hBlack4:
    {
        color: '#000',
        fontSize: "34@s",
        fontWeight: 'bold',
        paddingLeft: "20@s",
        marginBottom: "20@s",
        marginTop: "80@s"
    },

    h2Black4:
    {
        fontSize: "15@s",
        paddingLeft: "20@s",
        color: '#000',
        marginBottom: "20@s"
    },

    pGray4:
    {
        fontSize: "14@s",
        paddingLeft: "20@s",
        paddingRight: "10@s",
        color: '#5e5a5a',
        marginBottom: "20@s",
        lineHeight: "20@s"
    },

    touchableLYellow4: {

        marginTop: "10@s",
        paddingTop: "10@s",
        paddingBottom: "10@s",
        backgroundColor: '#fab700',
        marginBottom: '10@s',
        marginLeft: "17@s",
        marginRight: "190@s",


    },

    touchableLYellow42: {

        marginTop: "10@s",
        paddingTop: "10@s",
        paddingBottom: "10@s",
        backgroundColor: '#fab700',
        marginBottom: '10@s',
        marginLeft: "17@s",
        marginRight: "450@s",


    },

    touchableTCWhite4:
    {
        color: '#fff',
        textAlign: 'center',
        fontSize: '16@s',
        fontWeight: 'bold',
        paddingLeft: "20@s",
        paddingRight: "20@s"
    },

    ///////////////////////////////// Part 5 MODAL/////////////////////////////////////////////
    imgModal5:
    {

        width: "100%",
        height: "200@s"
    },

    imgModal52:
    {
        alignItems: "center",
        width: "100%",
        height: "300@s"
    },



    icon5:
    {
        paddingLeft: "150@s",
        paddingTop: "60@s"
    },


    icon52:
    {
        paddingLeft: "10@s",
        paddingTop: "100@s"
    },

    view5:
    {

        marginTop: '80@s',
        paddingRight: '15@s',
        paddingLeft: '15@s',

    },

    view52:
    {
        marginTop: '80@s',
        paddingRight: '30@s',
        paddingLeft: '30@s',

    },



    modal5:
    {
        width: "100%",
        height: "200@s",
        alignContent: 'center',
        backgroundColor: 'black',

    },

    modal52:
    {
        width: "100%",
        height: "250@s",
        alignContent: 'center',
        backgroundColor: 'black',

    },

    video5:
    {

        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        justifyContent: 'center'
    },


    button:
    {
        padding: "10@s",
        //elevation: "2@s",
        //marginBottom: "20@s",
        //backgroundColor: "#2196F3",
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },

    x5:
    {
        textAlign: 'right',
        color: '#F1ECEB',
        fontWeight: 'bold',
        fontSize: '20@s'
    },

    ///////////////////////////////// Part 6 /////////////////////////////////////////////
    hBlack6: {

        fontSize: "18@s",
        paddingTop: "40@s",
        fontWeight: 'bold'

    },

    pC6:
    {

        fontSize: "15@s",
        textAlign: 'center',
        paddingRight: "15@s",
        paddingLeft: "15@s",
        color: '#5e5a5a',
        marginTop: "30@s",
        marginBottom: "40@s"

    },

    ///////////////////////////////// Part 7 /////////////////////////////////////////////

    V7: {
        backgroundColor: '#f9f9ff',
        marginTop: "30@s",
        marginBottom: "40@s",
        paddingTop: "10@s"
    },

    hBlack7: {
        fontSize: "30@s",
        fontWeight: 'bold',
        paddingTop: "40@s",
    },

    h2Black7: {
        color: '#5e5a5a',
        fontSize: "14@s",
        textAlign: 'center',
        marginBottom: "10@s",
        marginTop: "10@s",
        marginLeft: "10@s"
    },

    viewIcon7:
    {
        marginBottom: '180@s',
        paddingLeft: "20@s"
    },


    icons7:
    {
        marginTop: "100@s",
        marginLeft: "10@s",
        marginBottom: "30@s",
        color: '#5e5a5a'
    },

    hIcons7:
    {
        color: 'black',
        fontSize: "20@s",
        fontWeight: 'bold',
        marginBottom: "10@s",
        marginLeft: "10@s"

    },

    pIcons7:
    {
        color: '#5e5a5a',
        fontSize: "15@s",
        marginBottom: "10@s",
        marginLeft: "10@s",
        color: '#5e5a5a',
        fontSize: "15@s",
        marginBottom: "10@s",
        marginLeft: "10@s"
    },

    ///////////////////////////////// Part 8 /////////////////////////////////////////////
    v8:
    {
        marginTop: '50@s',
        marginBottom: '50@s'
    },

    hBlack8: {
        fontSize: "30@s",
        paddingTop: "40@s",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    h2Black8: {

        fontSize: "14@s",
        textAlign: 'center',
        paddingRight: "10@s",
        paddingLeft: "10@s",
        color: '#5e5a5a',
        marginTop: "30@s",
        marginBottom: "60@s"
    },
    ///////////////////////////////// Part 9 /////////////////////////////////////////////


    view9: {
        height: "370@s",
        justifyContent: 'center',
        alignItems: 'center'

    },

    carousel9:
    {
        borderStyle: 'solid',
        borderWidth: .9,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9ff',
    },

    carousel9Content:
    {
        // width: '100%',
        // height: "300@s",
        justifyContent: "center",
        alignItems: "center",
        alignItems: 'center'
        // borderColor:'red',
        // borderWidth:2,
        // borderStyle:'solid'

    },

    carousel9Content92:
    {
        flex: .5,
        marginLeft: '9@s',
        marginRight: '9@s',
        height: "330@s",
        borderStyle: 'solid',
        borderWidth: .9,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9ff',

    },

    carousel92:
    {

        alignItems: 'center',
        justifyContent: 'center',

    },



    img92:
    {
        width: '100@s',
        height: '100@s',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },

    pCarousel9:
    {
        fontSize: "12@s",
        textAlign: 'center',
        paddingRight: "50@s",
        paddingLeft: "50@s",
        color: '#5e5a5a',
        marginTop: "30@s",
        marginBottom: "20@s",
        lineHeight: "17@s"
    },


    hCarousel9:
    {

        fontSize: "14@s",
        textAlign: 'center',
        paddingRight: "20@s",
        paddingLeft: "20@s",
        color: 'black',
        fontWeight: 'bold',
        marginTop: "30@s",
        marginBottom: "2@s",
        lineHeight: "15@s"
    },

    h2Carousel9: {

        fontSize: "14@s",
        textAlign: 'center',
        paddingRight: "20@s",
        paddingLeft: "20@s",
        color: '#5e5a5a',
        marginBottom: "20@s",

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
        fontSize: "30@s",
        paddingLeft: "10@s",
        paddingRight: "10@s",
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: "20@s",
        marginTop: "100@s",
    },

    p10: {
        fontSize: "15@s",
        paddingLeft: "15@s",
        paddingBottom: "20@s",
        color: '#fff',
        textAlign: 'center',
        lineHeight: "22@s",
    },

    touchableL10: {
        flex: 1,
        marginTop: "10@s",
        paddingTop: "10@s",
        paddingBottom: "10@s",
        marginLeft: "10@s",
        marginRight: "10@s",
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginBottom: "60@s",
        borderColor: '#fff'
    },

    touchableL102: {
        flex: 1,
        marginTop: "10@s",
        paddingTop: "10@s",
        paddingBottom: "10@s",
        marginLeft: "180@s",
        marginRight: "14@s",
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginBottom: "60@s",
        borderColor: '#fff'
    },

    touchable2L10: {
        flex: 1,
        marginTop: "10@s",
        paddingTop: "10@s",
        paddingBottom: "10@s",
        marginLeft: "14@s",
        marginRight: "14@s",
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginBottom: "60@s",
        borderColor: '#fff'
    },
    touchable2L102: {
        flex: 1,
        marginTop: "10@s",
        paddingTop: "10@s",
        paddingBottom: "10@s",
        marginRight: "180@s",
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginBottom: "60@s",
        borderColor: '#fff'
    },

    touchableTCBlack: {
        textAlign: 'center',
        fontWeight: 'bold'
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


    //////////////////////////////////part 14 ///////////////
    hBlack14:
    {
        color: '#000',
        fontSize: "33@s",
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: '10@s',
        paddingRight: '10@s',
        marginBottom: "20@s",
        marginTop: "80@s"
    },

    pGray14:
    {
        fontSize: "14@s",
        textAlign: 'center',
        paddingLeft: '15@s',
        paddingRight: '15@s',
        color: '#5e5a5a',
        marginBottom: "20@s",
        lineHeight: "20@s"
    },

    // //////////////////////PART 15 //////////////////////////////////

    view15:
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

    inputRow15:
    {
        flex: .5,
        paddingLeft: '5@s',
        paddingRight: '5@s',
    },

    txt15:
    {
        fontWeight: 'bold',

    },

    txtDays15:
    {
        fontWeight: 'bold',
        marginBottom: '20@s',
        marginTop: '10@s'


    },

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: '20@s',
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: '5@s',
        fontSize: '10@s'
    },

    textAreaContainer15: {
        borderColor: '#ced4da',
        borderWidth: 1,
        padding: '5@s',
        borderRadius: 20,
        marginTop: '10@s'
    },
    textArea15: {
        height: '150@s',
        justifyContent: "flex-start"
    },

    touchable15:
  {
    marginTop: "10@s",
    justifyContent: 'flex-end',
    width:'200@s',
    
    paddingTop: "10@s",
    paddingBottom: "10@s",
    backgroundColor: '#fab700',
  },

  touchableT15:
  {
    color: '#fff',
    textAlign: 'center',
    fontSize: '16@s',
    fontWeight: 'bold',
    paddingLeft: "20@s",
    paddingRight: "20@s"
  },
  viewTouchable15:
  {
      justifyContent:'flex-end',
      alignItems:'flex-end'
  }



});

export default FifthPage;