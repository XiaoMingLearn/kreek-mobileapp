import {DefaultTheme} from '@react-navigation/native';

export const lightColor = {
    primary: 'red',
    background: '#FFFFFF',
    card: 'blue',
    text: '#000000',
    textFade: '#00000060',
    underline: '#FF6F00',
    borderBottom: '#00000080',
    border: 'white',
    notification: 'blue',
    main1: 'EA771E',
    main2: '2293A3',

    background_contrast: '#FFFFFF',
    text_contrast: '#000000',
    textFade_contrast: '#00000060',
    underline_contrast: '#FF6F00',
    borderBottom_contrast: '#00000080',

};

export const darkColor = {
    primary: 'red',
    background: '#222222',
    card: 'blue',
    text: '#ffffff',
    textFade: '#ffffff60',
    underline: '#FFFF00',
    borderBottom: '#ffffff80',
    border: '#222222',
    notification: 'blue',
    main1: 'EA771E',
    main2: '2293A3',

    background_contrast: '#222222',
    text_contrast: '#ffffff',
    textFade_contrast: '#ffffff60',
    underline_contrast: '#FFFF00',
    borderBottom_contrast: '#ffffff80'
};

export const lightTheme = {
    dark: false,
    colors: lightColor
};

export const darkTheme = {
    dark: true,
    colors: darkColor
};
