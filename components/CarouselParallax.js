import React, {useState, useRef, useEffect} from 'react';
import { TouchableOpacity, Button, Easing, StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    Keyframe,
} from 'react-native-reanimated';
import { ElementsText, window } from './carousel/constant';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { Audio } from 'expo-av';

const PAGE_WIDTH = window.width;
let dotColors = [
    '#26292E',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F5D399',
    '#F1F1F1',
];

function CarouselParallax(props) {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const [isVertical, setIsVertical] = React.useState(false);
    const [autoPlay, setAutoPlay] = React.useState(true);
    const [pagingEnabled, setPagingEnabled] = React.useState(false);
    const [snapEnabled, setSnapEnabled] = React.useState(true);
    const progressValue = useSharedValue(0);
    const [currIdx, setCurrIdx] = useState(0);
    const itemList = props.itemList
    const baseOptions = isVertical
        ? ({
              vertical: true,
              width: PAGE_WIDTH,
              height: PAGE_WIDTH * 0.6,
          })
        : ({
              vertical: false,
              width: 200,
              height: 300,
          });

          const enableSound = props.enableSound
          const [sound, setSound] = React.useState();

          async function playSound() {
            if (enableSound) {
                const { sound } = await Audio.Sound.createAsync( require('../assets/card_flip.mp3')
                );
                setSound(sound);
    
                await sound.playAsync();
            }
          }
        
          React.useEffect(() => {
            return sound
              ? () => {
                  sound.unloadAsync();
                }
              : undefined;
          }, [sound]);

    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent:'center',
                width:800,
            }}
        >
        {!!progressValue && (
                <View
                    style={
                        isVertical
                            ? {
                                  flexDirection: 'column',
                                  justifyContent: 'space-between',
                                  width: 10,
                                  alignSelf: 'center',
                                  position: 'absolute',
                                  right: 5,
                                  top: 40,
                              }
                            : {
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  width: 100,
                                  alignSelf: 'center',
                              }
                    }
                >
                    {dotColors.map((backgroundColor, index) => {
                        return (
                            <PaginationItem
                                backgroundColor={backgroundColor}
                                animValue={progressValue}
                                index={index}
                                key={index}
                                isRotate={isVertical}
                                length={dotColors.length}
                            />
                        );
                    })}
                </View>
            )}
            <Carousel
                {...baseOptions}
                style={styles.carousel}
                loop
                pagingEnabled={pagingEnabled}
                snapEnabled={snapEnabled}
                autoPlay={autoPlay}
                autoPlayInterval={1500}
                onProgressChange={(_, absoluteProgress) =>
                    (progressValue.value = absoluteProgress)
                }
                onScrollBegin={() => playSound()}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 1,
                    parallaxScrollingOffset: 100,
                    parallaxAdjacentItemScale: 0.5,
                }}
                onSnapToItem={(index) => {setCurrIdx(index)}}
                data={itemList}
                renderItem={({ item }) => (
                <View style={styles.card_container}>
                    
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.to)}>
                        <Image style={styles.card} source={item.uri} />
                    </TouchableOpacity>
                </View>)}
            />

            <InfoBlock index={currIdx} days={itemList[currIdx]['dayInvested']} token={itemList[currIdx]['tokenAdded']} />
        </View>
    );
}

// For dot indicators
const PaginationItem  = (props) => {
    const { animValue, index, length, backgroundColor, isRotate } = props;
    const width = 10;

    const animStyle = useAnimatedStyle(() => {
        let inputRange = [index - 1, index, index + 1];
        let outputRange = [-width, 0, width];

        if (index === 0 && animValue?.value > length - 1) {
            inputRange = [length - 1, length, length + 1];
            outputRange = [-width, 0, width];
        }

        return {
            transform: [
                {
                    translateX: interpolate(
                        animValue?.value,
                        inputRange,
                        outputRange,
                        Extrapolate.CLAMP
                    ),
                },
            ],
        };
    }, [animValue, index, length]);
    return (
        <View
            style={[indicatorStyle.main, {
                width,
                height: width,
                transform: [
                    {
                        rotateZ: isRotate ? '90deg' : '0deg',
                    },
                ],
            }]}
        >
            <Animated.View style={[{backgroundColor}, indicatorStyle.container, animStyle]}/>
        </View>
    );
};

// for information to be shown
const enteringAnimation = new Keyframe({
    0: {
		opacity: 0,
    },
    100: {
		opacity: 1,
    },
}).duration(500)

const InfoBlock = (props) => {
    const { colors } = useTheme();
    const {index, days, token} = props
    const animValue = new Animated.Value(1)
    const opac = animValue.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 0],
        extrapolate: 'clamp'
    })

    return (
        <Animated.View style={[infoStyles.stat, {opacity:animValue}]}>
            {days && 
                <View style={infoStyles.row}> 
                    <FontAwesome style={infoStyles.icon} name="calendar" size={24} color={colors.text} />
                    <Text style={{color: colors.text, fontSize:15}}>Days Holding: </Text>   
                    <Text style={{color: colors.text, fontSize:15}}>{days}</Text>
                </View>
            }
            {token &&
                <View style={infoStyles.row}>
                    <FontAwesome style={infoStyles.icon} name="bitcoin" size={30} color={colors.text} />
                    <Text style={{color: colors.text, fontSize:15}}>Token: </Text>   
                    <Text style={{color: colors.text, fontSize:15}}>+ {token} Kreek Tokens</Text>
                </View>
            }
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        borderRadius: 50,
        overflow: 'hidden',
    },
    container: {
        borderRadius: 50,
        flex: 1,
    },
    card_container : {
        flex: 1,
        justifyContent: 'center',
    }, 
    card: {
        flex: 1,
        height: 400,
        width: '100%',
        resizeMode: "contain",
        borderRadius: 20,
    },
    carousel: {
        justifyContent:'center',
        width: '100%'
    },
    info: {
        justifyContent:'center',
    }
})

const indicatorStyle = StyleSheet.create({
    main: {
        marginVertical:10,
        backgroundColor: 'white',
        borderRadius: 50,
        overflow: 'hidden',
    },
    container: {
        borderRadius: 50,
        flex: 1,
    },
})

const infoStyles = StyleSheet.create({
    stat: {
        justifyContent:"center",
        flexDirection:"column",
        width:'25%',
        marginVertical: 20,
    },
    row: {
        justifyContent:"flex-start",
        flexDirection:"row",
        marginVertical:5,
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10
    }
})

export default CarouselParallax;