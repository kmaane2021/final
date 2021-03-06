import * as React from 'react';
import { View, Text, Image,SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScaledSheet } from "react-native-size-matters";



const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const SixthPage = ({ navigation }) => {

    const image1 = { uri: 'https://preview.colorlib.com/theme/animalshelter/img/blog/blog-home-banner.jpg' };
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
                                    <Text style={styles.h1}>Dude You???re Getting a Telescope</Text>

                                    <Text style={styles.p1}>There is a moment in the life of any aspiring astronomer that it is time to buy that first</Text>
                                </View>

                                <TouchableOpacity
                                    style={styles.viewTouchable1}
                                    onPress={
                                        () => navigation.navigate('SixthPage')
                                    }
                                    underlayColor='#fff'>
                                    <Text style={styles.touchableText1}>View More</Text>
                                </TouchableOpacity>

                            </View>


                        </View>
                    </ImageBackground>



                    {/* ******************************part 16 ****************************** */}

                    <View style={styles.view16}>
                        <ImageBackground source={image2} style={mode === "portrait" ? styles.imgBk16 : styles.imgBk162}>



            
                            <View style={styles.viewPart16}>

                                <Text style={styles.h16}>SOCIAL LIFE</Text>

                                <Text style={styles.p16}>________________________________</Text>

                                <Text style={styles.p16}>Enjoy your social life together</Text>


                            </View>

                        </ImageBackground>

                    </View>


                    <View style={styles.view16}>
                        <ImageBackground source={image3} style={mode === "portrait" ? styles.imgBk16 : styles.imgBk162}>



                            <View style={styles.viewPart16}>

                                <Text style={styles.h16}>POLITICS</Text>

                                <Text style={styles.p16}>________________________________</Text>

                                <Text style={styles.p16}>Be a part of politics</Text>


                            </View>

                        </ImageBackground>

                    </View>



                    <View style={styles.view16}>
                        <ImageBackground source={image4} style={mode === "portrait" ? styles.imgBk16 : styles.imgBk162}>



                            <View style={styles.viewPart16}>

                                <Text style={styles.h16}>FOOD</Text>

                                <Text style={styles.p16}>________________________________</Text>

                                <Text style={styles.p16}>Let the food be finished</Text>


                            </View>

                        </ImageBackground>

                    </View>



                    {/* ************************PART 17 ******************************** */}
                    {mode === "portrait" ?
                        <View>
                            <View style={styles.view17}>

                                <View style={styles.v17}>

                                    <View style={{ flex: .2 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Food, </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .37 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Technology,</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .23 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Politics,</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{ flex: .3 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}> Lifestyle</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>








                                <View style={styles.v17icons}>

                                    <View style={{ flexDirection: 'row', flex: 1 }} >
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>Mark Wiens</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>12 Dec, 2017</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                        </View>
                                    </View>



                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>1.2M Views</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>06 Comments</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                        </View>
                                    </View>




                                </View>



                                <View style={styles.imgViewIcons17}>

                                    <Image source={image5} style={styles.imgv17} />

                                </View>


                                <View style={styles.textv17}>
                                    <Text style={styles.hv17}>Astronomy Binoculars A Great Alternative</Text>
                                    <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                    <TouchableOpacity
                                        style={styles.touchable17}
                                        onPress={() => navigation.navigate('SixthPage')}
                                        underlayColor='#fff'>
                                        <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>




                            <View style={styles.view17}>

                                <View style={styles.v17}>

                                    <View style={{ flex: .2 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Food, </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .37 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Technology,</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .23 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Politics,</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{ flex: .3 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}> Lifestyle</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>




                                <View>


                                    <View style={{ flexDirection: 'row', flex: 1 }} >
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>Mark Wiens</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>12 Dec, 2017</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                        </View>
                                    </View>



                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>1.2M Views</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>06 Comments</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                        </View>
                                    </View>




                                </View>



                                <View style={styles.imgViewIcons17}>

                                    <Image source={image6} style={styles.imgv17} />

                                </View>


                                <View style={styles.textv17}>
                                    <Text style={styles.hv17}>The Basics Of Buying A Telescope</Text>
                                    <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                    <TouchableOpacity
                                        style={styles.touchable17}
                                        onPress={() => navigation.navigate('SixthPage')}
                                        underlayColor='#fff'>
                                        <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>






                            <View style={styles.view17}>

                                <View style={styles.v17}>

                                    <View style={{ flex: .2 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Food, </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .37 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Technology,</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .23 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Politics,</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{ flex: .3 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}> Lifestyle</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>




                                <View>


                                    <View style={{ flexDirection: 'row', flex: 1 }} >
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>Mark Wiens</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>12 Dec, 2017</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                        </View>
                                    </View>



                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>1.2M Views</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>06 Comments</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                        </View>
                                    </View>




                                </View>



                                <View style={styles.imgViewIcons17}>

                                    <Image source={image7} style={styles.imgv17} />

                                </View>


                                <View style={styles.textv17}>
                                    <Text style={styles.hv17}>The Glossary Of Telescopes</Text>
                                    <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                    <TouchableOpacity
                                        style={styles.touchable17}
                                        onPress={() => navigation.navigate('SixthPage')}
                                        underlayColor='#fff'>
                                        <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>






                            <View style={styles.view17}>

                                <View style={styles.v17}>

                                    <View style={{ flex: .2 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Food, </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .37 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Technology,</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .23 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Politics,</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{ flex: .3 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}> Lifestyle</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>




                                <View>


                                    <View style={{ flexDirection: 'row', flex: 1 }} >
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>Mark Wiens</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>12 Dec, 2017</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                        </View>
                                    </View>



                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>1.2M Views</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>06 Comments</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                        </View>
                                    </View>




                                </View>



                                <View style={styles.imgViewIcons17}>

                                    <Image source={image8} style={styles.imgv17} />

                                </View>


                                <View style={styles.textv17}>
                                    <Text style={styles.hv17}>The Night Sky</Text>
                                    <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                    <TouchableOpacity
                                        style={styles.touchable17}
                                        onPress={() => navigation.navigate('SixthPage')}
                                        underlayColor='#fff'>
                                        <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>





                            <View style={styles.view17}>

                                <View style={styles.v17}>

                                    <View style={{ flex: .2 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Food, </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .37 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Technology,</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: .23 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}>Politics,</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{ flex: .3 }}>

                                        <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p17}> Lifestyle</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>




                                <View>


                                    <View style={{ flexDirection: 'row', flex: 1 }} >
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>Mark Wiens</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>12 Dec, 2017</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                        </View>
                                    </View>



                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>1.2M Views</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={styles.p17}>06 Comments</Text>
                                            </TouchableOpacity>

                                            <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                        </View>
                                    </View>




                                </View>



                                <View style={styles.imgViewIcons17}>

                                    <Image source={image9} style={styles.imgv17} />

                                </View>


                                <View style={styles.textv17}>
                                    <Text style={styles.hv17}>Telescopes 101</Text>
                                    <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                    <TouchableOpacity
                                        style={styles.touchable17}
                                        onPress={() => navigation.navigate('SixthPage')}
                                        underlayColor='#fff'>
                                        <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>


                        </View> :
                        <View>

                            <View>

                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>

                                    <View style={{ flex: .3 }}>
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <View style={{ flex: 1 }}>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Food,Technology, </Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Politics,Lifestyle</Text>
                                                </TouchableOpacity>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>Mark Wiens</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                                    </View>

                                                </View>


                                            </View>

                                            <View style={{ flex: 1 }}>


                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>12 Dec, 2017</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                                    </View>

                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>1.2M Views</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                                    </View>
                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>



                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                        underlayColor='#fff'>
                                                        <Text style={styles.p17}>06 Comments</Text>
                                                    </TouchableOpacity>

                                                    <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                                </View>

                                            </View>

                                        </View>

                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.imgViewIcons172}>

                                            <Image source={image5} style={styles.imgv172} />

                                        </View>

                                    </View>







                                </View>



                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                                    <View style={{ flex: .3 }}>
                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.textv172}>
                                            <Text style={styles.hv17}>Astronomy Binoculars A Great Alternative</Text>
                                            <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                            <TouchableOpacity
                                                style={styles.touchable17}
                                                onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>




                                </View>

                            </View>



                            {/*  */}

                            <View>

                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>

                                    <View style={{ flex: .3 }}>
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <View style={{ flex: 1 }}>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Food,Technology, </Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Politics,Lifestyle</Text>
                                                </TouchableOpacity>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>Mark Wiens</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                                    </View>

                                                </View>


                                            </View>

                                            <View style={{ flex: 1 }}>


                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>12 Dec, 2017</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                                    </View>

                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>1.2M Views</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                                    </View>
                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>



                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                        underlayColor='#fff'>
                                                        <Text style={styles.p17}>06 Comments</Text>
                                                    </TouchableOpacity>

                                                    <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                                </View>

                                            </View>

                                        </View>

                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.imgViewIcons172}>

                                            <Image source={image6} style={styles.imgv172} />

                                        </View>

                                    </View>







                                </View>



                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                                    <View style={{ flex: .3 }}>
                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.textv172}>
                                            <Text style={styles.hv17}>The Basics Of Buying A Telescope</Text>
                                            <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                            <TouchableOpacity
                                                style={styles.touchable17}
                                                onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>




                                </View>

                            </View>

                            {/*  */}

                            <View>

                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>

                                    <View style={{ flex: .3 }}>
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <View style={{ flex: 1 }}>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Food,Technology, </Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Politics,Lifestyle</Text>
                                                </TouchableOpacity>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>Mark Wiens</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                                    </View>

                                                </View>


                                            </View>

                                            <View style={{ flex: 1 }}>


                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>12 Dec, 2017</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                                    </View>

                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>1.2M Views</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                                    </View>
                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>



                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                        underlayColor='#fff'>
                                                        <Text style={styles.p17}>06 Comments</Text>
                                                    </TouchableOpacity>

                                                    <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                                </View>

                                            </View>

                                        </View>

                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.imgViewIcons172}>

                                            <Image source={image7} style={styles.imgv172} />

                                        </View>

                                    </View>







                                </View>



                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                                    <View style={{ flex: .3 }}>
                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.textv172}>
                                            <Text style={styles.hv17}>The Glossary Of Telescopes</Text>
                                            <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                            <TouchableOpacity
                                                style={styles.touchable17}
                                                onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>




                                </View>

                            </View>
                            {/*  */}


                            <View>

                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>

                                    <View style={{ flex: .3 }}>
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <View style={{ flex: 1 }}>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Food,Technology, </Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Politics,Lifestyle</Text>
                                                </TouchableOpacity>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>Mark Wiens</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                                    </View>

                                                </View>


                                            </View>

                                            <View style={{ flex: 1 }}>


                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>12 Dec, 2017</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                                    </View>

                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>1.2M Views</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                                    </View>
                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>



                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                        underlayColor='#fff'>
                                                        <Text style={styles.p17}>06 Comments</Text>
                                                    </TouchableOpacity>

                                                    <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                                </View>

                                            </View>

                                        </View>

                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.imgViewIcons172}>

                                            <Image source={image8} style={styles.imgv172} />

                                        </View>

                                    </View>







                                </View>



                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                                    <View style={{ flex: .3 }}>
                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.textv172}>
                                            <Text style={styles.hv17}>The Night Sky</Text>
                                            <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                            <TouchableOpacity
                                                style={styles.touchable17}
                                                onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>




                                </View>

                            </View>

                            {/*  */}

                            <View>

                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>

                                    <View style={{ flex: .3 }}>
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <View style={{ flex: 1 }}>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Food,Technology, </Text>
                                                </TouchableOpacity>


                                                <TouchableOpacity onPress={() => navigation.navigate('SixthPage')}
                                                    underlayColor='#fff'>
                                                    <Text style={styles.p17}>Politics,Lifestyle</Text>
                                                </TouchableOpacity>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>Mark Wiens</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="user" color="black" size={20} />
                                                    </View>

                                                </View>


                                            </View>

                                            <View style={{ flex: 1 }}>


                                                <View style={{ flexDirection: 'row', flex: 1 }} >
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>12 Dec, 2017</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="calendar" color="black" size={20} />
                                                    </View>

                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                            underlayColor='#fff'>
                                                            <Text style={styles.p17}>1.2M Views</Text>
                                                        </TouchableOpacity>

                                                        <Icon style={{ flex: 1 }} name="eye" color="black" size={20} />
                                                    </View>
                                                </View>

                                            </View>

                                            <View style={{ flex: 1 }}>



                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('SixthPage')}
                                                        underlayColor='#fff'>
                                                        <Text style={styles.p17}>06 Comments</Text>
                                                    </TouchableOpacity>

                                                    <Icon style={{ flex: 1 }} name="comment" color="black" size={20} />
                                                </View>

                                            </View>

                                        </View>

                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.imgViewIcons172}>

                                            <Image source={image9} style={styles.imgv172} />

                                        </View>

                                    </View>







                                </View>



                                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                                    <View style={{ flex: .3 }}>
                                    </View>

                                    <View style={{ flex: .7 }}>

                                        <View style={styles.textv172}>
                                            <Text style={styles.hv17}>Telescopes 101</Text>
                                            <Text style={styles.pv17}>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Text>
                                            <TouchableOpacity
                                                style={styles.touchable17}
                                                onPress={() => navigation.navigate('SixthPage')}
                                                underlayColor='#fff'>
                                                <Text style={{ fontWeight: 'bold' }}>View More</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>




                                </View>

                            </View>




                        </View>


                    }



                    {/* ***********************PART 11************************** */}


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
                                <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('SixthPage')}
                                    underlayColor='#fff'>
                                    <Text style={styles.p11}>Service</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('SixthPage')}
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
                                            onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p11}>Pricing</Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('SixthPage')}
                                            underlayColor='#fff'>
                                            <Text style={styles.p11}>Service</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('SixthPage')}
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
                                        <TouchableOpacity style={styles.touchableL11} onPress={() => navigation.navigate('SixthPage')}
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

    p1:
    {
        fontSize: "14@s",
        textAlign: 'center',
        color: 'white',
        marginBottom: "20@s",
        lineHeight: "20@s"
    },



    touchableText1:
    {
        color: 'black',
        fontSize: '19@s',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    viewTouchable1:

    {

        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingTop: '10@s',
        paddingBottom: '10@s',
        marginBottom: '90@s',
        marginLeft: '70@s',
        marginRight: '70@s',
    },

    viewPart1:

    {
        justifyContent: 'center',
        justifyContent: 'center',
        marginBottom: '30@s',


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
    paddingLeft:'5@s',
    paddingRight:'5@s',

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
    flex:.5,
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingTop: '10@s',
    paddingBottom: '10@s',
  },

  view13:
  {
    marginBottom: '5@s',
    marginTop:'20@s'
  },

    /////////////////////////part 16 /////////////////////////////////
    imgBk16:
    {

        width: "100%",
        height: "190@s",
        // paddingLeft:'10@s',
        // paddingRight:'10@s',
        // resizeMode: "cover",
        // overflow: "hidden",
    },


    imgBk162:
    {

        width: "100%",
        height: "260@s",
        // paddingLeft:'10@s',
        // paddingRight:'10@s',
        // resizeMode: "cover",
        // overflow: "hidden",
    },


    view16:
    {

        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        paddingLeft: '10@s',
        paddingRight: '10@s',
        marginTop: '30@s',
        marginBottom: '40@s'


    },

    viewPart16:

    {
        justifyContent: 'center',
        justifyContent: 'center',
        height: '60%',
        marginBottom: '5@s',
        marginTop: '40@s',
        paddingTop: '20@s',
        paddingBottom: '20@s',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'



    },


    h16:
    {
        color: 'white',
        fontSize: '18@s',
        textAlign: 'center',
        fontWeight: 'bold'

    },
    p16:
    {
        color: 'white',
        fontSize: '14@s',
        textAlign: 'center',

    },

    // //////////////////////part 17 /////////////////////////////////


    view17:

    {
        marginLeft: "20@s",
        marginTop: '100@s',
        marginBottom: '30@s'

    },

    p17:
    {
        color: 'black',
        fontSize: '12@s'


    },

    v17:
    {

        width: '210@s',
        flexDirection: 'row',
        flex: 1,
        marginBottom: '30@s'

    },

    iconView17:
    {
        marginTop: '40@s',
        marginLeft: '20@s'

    },

    imgView17:
    {
        paddingLeft: '10@s',
        paddingRight: '10@s',
        marginBottom: '40@s',
        marginTop: '40@s'
    },

    imgViewIcons17:
    {
        paddingLeft: '10@s',
        paddingRight: '10@s',
        marginBottom: '40@s',
        marginTop: '20@s'
    },

    imgViewIcons172:
    {
        // paddingLeft: '10@s',
        // paddingRight: '10@s',
        // marginBottom: '40@s',
        // marginTop: '20@s'
    },

    imgv17: {
        width: "95%",
        height: "179@s"
    },

    imgv172: {
        width: "100%",
        height: "179@s"
    },
    hv17: {

        fontSize: '19@s',
        fontWeight: 'bold'

    },


    pv17: {
        paddingTop: '20@s',

        fontSize: '13@s',


    },

    textv17:
    {
        paddingLeft: '10@s',
        paddingRight: '10@s',
        marginBottom: '10@s'
    },

    textv172:
    {
        paddingLeft: '10@s',
        paddingRight: '10@s',
        marginBottom: '30@s',
        marginTop: "40@s"
    },

    touchable17: {
        paddingTop: '30@s'
    },

    v17icons:
    {
        marginBottom: '5@s'
    }
});

export default SixthPage;