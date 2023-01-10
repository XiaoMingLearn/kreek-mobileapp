import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ProgressBar from '../components/ProgressBar.js'
import { LinearGradient } from 'expo-linear-gradient';

const UserScreen = () => {

  const { colors } = useTheme();

  return (
    <LinearGradient
	// colors={['#80808050','#1A111050', '#454545']}
        colors={['#2DDFF515','#11437815', '#17E19327']}

        start={{x: 0, y: 0.5}}
	end={{x: 1, y: 1}}
	style={{height:'100%'}}
  >
    <ScrollView>
    <View style={[styles.container]}>
        <View style={styles.userTop}>
            {/* <View style={styles.userTopLeft}>
                <Image
                style={styles.profilePic}
                source={require('../assets/profilepic.png')}
                />
            </View> */}
            <View style={styles.userTopRight}>
                <Text style={[styles.title, {color:colors.text}]}>Ape@NFT</Text>
                <Text style={[styles.title, {color:colors.text}]}>Level 6    My Kreek Token: 50</Text>
                <ProgressBar bgcolor = '#2EBB96FF' completed = {60} />
            </View>
        </View>

        <View style={styles.subContainer}>
            <Text style={[styles.subtitle, {color:colors.text}]}>
                User Profile
            </Text>
            <View style = {styles.subContainerList}>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>View Achievements</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>Invite Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>Task Center</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.subContainer}>
            <Text style={[styles.subtitle, {color:colors.text}]}>
                Portfolio Analysis
            </Text>
            <View style = {styles.subContainerList}>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>Portfolio Overview</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>Deposit Assets</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>Withdrawn Money</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.subContainer}>
            <Text style={[styles.subtitle, {color:colors.text}]}>
                Preference
            </Text>
            <View style = {styles.subContainerList}>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>Display</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>News</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>App Feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.subContainerListItem, {color:colors.text}]}>Notification</Text>
                </TouchableOpacity>
            </View>
        </View>


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
      paddingTop: 10,
      paddingBottom: 50,
      zIndex:10
    },
    profilePic: {
        borderRadius: 30,
        width: 60,
        height:60,
        marginHorizontal: 5,
        marginVertical:10,
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    userTop: {
        width: 280,
        justifyContent: 'flex-start',
        flexDirection:'row',
    },
    userTopLeft: {
        flex:1,
        marginRight:10
    },
    userTopRight: {
        flex: 3,
        marginHorizontal: 10
    },
    title: {
        margin: 2
    },
    subContainer: {
        margin: 10,
        width: 280,
        flexDirection: 'column',
        justifyContent:'flex-start',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 8,
        marginBottom: 6,
    },
    subtitlelist: {
        fontSize: 16
    },
    subContainerList: {
        backgroundColor: '#77777780',
        borderRadius: 8,
    },
    subContainerListItem: {
        margin: 6,
    },

  });

export default UserScreen
