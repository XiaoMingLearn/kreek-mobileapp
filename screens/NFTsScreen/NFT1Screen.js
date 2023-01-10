import React,{useState} from "react";
import { StyleSheet,Text, View, Image, Platform, StatusBar, ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { Keyframe, Easing, color } from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import NFTCardCover from '../../components/NFTCardCover.js'

const enteringAnimation = new Keyframe({
    0: {
		opacity: 0,
    },
    100: {
		opacity: 1,
    },
}).duration(500)

const NFT1Screen = () => {
	const [section, setSection] = useState(1)
	const { colors } = useTheme();
	const Section1 = () => {
		return (
			<Animated.View entering={enteringAnimation} style={styles.content}>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>DCA ETH Price</Text>
					<Text style={[styles.right, {color:colors.text}]}>1102 USD</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Current ETH Price</Text>
					<Text style={[styles.right, {color:colors.text}]}>1420 USD</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Commission fee over total value</Text>
					<Text style={[styles.right, {color:colors.text}]}>0.39%</Text>
				</View>
				<Text style = {[styles.paragraph, {color:colors.text}]}>
					100% ETH on BSC Chain
				</Text>
			</Animated.View>
		)
	}

	const Section2 = () => {
		return (
			<Animated.View entering={enteringAnimation} style={styles.content}>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>This NFT is active and generating 5 $Drip every day.</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>This NFT has not been renewed. The Speed multiplier is 1.0X</Text>
				</View>
			</Animated.View>
		)
	}

	const Section3 = () => {
		return (
			<Animated.View entering={enteringAnimation} style={styles.content}>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text, fontSize:18}]}>Holders Left</Text>
					<Text style={[styles.right, {color:colors.text, fontSize:18}]}>792 / 1000</Text>
				</View>
				<View style={{height:20}}></View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>* You can get 100 USD when there are only 5 holders.</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>* You can get back >126.3% of the commission you put in the holder pool</Text>
				</View>
			</Animated.View>
		)
	}

	const navigation = useNavigation();

return (
	<LinearGradient
	// colors={['#80808050','#1A111050', '#454545']}
		colors={['#2DDFF515','#11437815', '#17E19327']}

		start={{x: 0, y: 0.5}}
	end={{x: 1, y: 1}}
	style={{height:'100%'}}
  >
	<ScrollView>
	<View style={styles.container}>
    {/* <View style={[styles.container, {backgroundColor: colors.background}]}> */}
		<View style={{height:20}} />
		<TouchableOpacity containerStyle={styles.backButton} onPress={() => navigation.goBack()}>
			<Ionicons name="chevron-back-outline" style={{color:colors.text}} size={40}/>
		</TouchableOpacity>
		<NFTCardCover>
			<Image
			style={styles.poster}
			source={require('../../assets/card1.png')}
			/>
		</NFTCardCover>
        <Text style={[styles.title, {color: colors.text}]}>Crytal Card 1</Text>

        <View style={[styles.menu, {borderBottomColor: colors.borderBottom}]}>
			<TouchableOpacity onPress={() => setSection(1)}>
            <Text style={section == 1 ? [styles.subtitleActive, { color: colors.text}]: [styles.subtitle,{ color: colors.textFade}]}>
				Investment
            </Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setSection(2)}>
            <Text style={section == 2 ? [styles.subtitleActive, { color: colors.text}]: [styles.subtitle,{ color: colors.textFade}]}>
				Drip Mining
            </Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setSection(3)}>
			<Text style={section == 3 ? [styles.subtitleActive, { color: colors.text}]: [styles.subtitle,{ color: colors.textFade}]}>
				Holders/Pools
            </Text>
			</TouchableOpacity>
        </View>

		{section == 1 && <Section1 />}
		{section == 2 && <Section2 />}
		{section == 3 && <Section3 />}

        <View style={{flex:3}} />
    </View>

	</ScrollView>
	</LinearGradient>
);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		height:'100%'
	},
	backButton: {
		position: 'absolute',
		top: 30,
		left: 15,
		zIndex:1
	},
	poster: {
		height: 250,
		width: 400,
		resizeMode: 'contain'
	},
	title: {
		fontSize: 20,
		margin:15,
		width: '80%',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	menu: {
		borderBottomWidth: 1,
		flex:1,
		flexDirection:'row',
		width: '80%',
		justifyContent:'space-around'
	},
	subtitleActive: {
		borderBottomColor: '#FF6F00',
		borderBottomWidth: 1,
		paddingBottom:5,
		paddingHorizontal: 10,
		textAlign:'center'
	},
	subtitle:{
		paddingHorizontal: 10,
		paddingBottom:5,
	},
	content: {
		flex:6,
		width: '80%',
		marginVertical: 10,
	},
	listItem: {
		flexDirection:'row',
		alignContent:'space-between',
		width: '100%'
	},
	left: {
		flex:1,
		marginHorizontal:20,
		marginVertical: 5,
	},
	right: {
		flex:1,
		textAlign:'right',
		marginHorizontal:20,
		marginVertical: 5,
		textAlignVertical: 'center'
	},
	paragraph: {
		marginVertical: 10,
		textAlign: 'center',
	}
})

NFT1Screen.navigationOptions = (navData) => {
	headerShown:false
}



export default NFT1Screen;
