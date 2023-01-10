import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const currStyle = {
    backgroundColor: bgcolor,
    width: `${completed}%`
  }
  return (
    <View style={styles.container}>
      <View style={[styles.filler, currStyle]}>
        <Text style={styles.label}>{completed} / 100</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 15,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginVertical: 10,
    },
    filler: {
        height: '100%',
        textAlign: 'right',
        borderRadius: 50,
    },
    label: {
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 10,

    }

  });

export default ProgressBar;
