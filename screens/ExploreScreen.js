import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Text, View, Dimensions, Image, PanResponder, Pressable, ImageEditor } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Easing, Alert, ScrollView} from 'react-native';
import ProfileCardsLine from '../components/ProfileCardsLine.js'
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
import { useTheme } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import CarouselParallax from '../components/CarouselParallax'
import CarouselCurve from '../components/CarouselCurve'
import { LinearGradient } from 'expo-linear-gradient';


const PAGE_WIDTH = window.width / 5;
const colors = [
    '#26292E',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F5D399',
    '#F1F1F1',
];

const ExploreScreen = (props) => {
    const { colors } = useTheme();
    const [currIdx, setCurrIdx] = useState(0)
    const enableSound = props.enableSound

    return (
    <LinearGradient
        // colors={['#AFFEFF20','#AFFEFF20', '#AFFEFF20']}
        // colors={['#80808020','#80808020', '#80808020']}
        colors={['#2DDFF515','#11437815', '#17E19327']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <View style={{flex:1}} />

        <View style={{flex: 10, alignItems:'center', zIndex:2}}>
        <CarouselParallax itemList={card_deck} enableSound={enableSound} />
        {/* <Button title='click' onPress={() => setCurrIdx(currIdx + 1)} /> */}
        </View>
        <View style={{flex:2}} />

        <View style={{flex:1}} />
        <LinearGradient
        colors={['#2EBB96FF', '#2EBB96FF', '#2EBB96FF']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.button}
        >
        <TouchableOpacity>
            <Text style={styles.buttonText}>COLLECT NOW</Text>
        </TouchableOpacity>
        </LinearGradient>
        <View style={{flex:3 }} />
    </LinearGradient>
    );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  stat:{
    justifyContent:"space-around",
    flexDirection:"row",
    width:'100%',
  },
  cardStyle: {
    width: '75%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 7,
  },
  cardTitleStyle: {
    color: '#fff',
    fontSize: 24,
  },
  swipeText: {
    fontSize: 18,
    textAlign: 'center',
  },
  userLine: {
    flex:1,
  },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 20,
        elevation: 3,
        //backgroundColor:'#FF6F00',
        width: 280,
        height: 50,
        shadowOffset:{width:3,height:5},
        shadowOpacity: 0.4,
        shadowRadius: 1.5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

const sampleUser1 = [require('../assets/user1.png'), require('../assets/user2.png'), require('../assets/user3.png'), require('../assets/user4.png')]
const sampleUser2 = [ require('../assets/user3.png'), require('../assets/user4.png'), require('../assets/user1.png'), require('../assets/user2.png')]
const sampleUser3 = [require('../assets/user1.png'), require('../assets/user4.png'), require('../assets/user2.png'), require('../assets/user3.png')]

const card_deck = [
  { id: "1", uri: require('../assets/card1.png'), to:'NFT1', desc:"321 / 1000 Investors Are Still Holding", user: sampleUser1},
  { id: "2", uri: require('../assets/card2.png'), to:'NFT2', desc:"211 / 500 Investors Are Still Holding", user: sampleUser2},
  { id: "3", uri: require('../assets/card3.png'), to:'NFT3', desc:"311 / 800 Investors Are Still Holding", user: sampleUser3},
  { id: "4", uri: require('../assets/card1.png'), to:'NFT1', desc:"321 / 1000 Investors Are Still Holding", user: sampleUser1},
  { id: "5", uri: require('../assets/card2.png'), to:'NFT2', desc:"211 / 500 Investors Are Still Holding", user: sampleUser2},
  { id: "6", uri: require('../assets/card3.png'), to:'NFT3', desc:"311 / 800 Investors Are Still Holding", user: sampleUser3},
]


export default ExploreScreen;
