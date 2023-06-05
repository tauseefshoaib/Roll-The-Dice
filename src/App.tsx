import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../assets';

const diceFaces = [
  Images.one,
  Images.two,
  Images.three,
  Images.four,
  Images.five,
  Images.six,
];

const App = () => {
  const [diceIndex, setDiceIndex] = useState(null);
  const onPressButton = () => {
    const num = Math.floor(Math.random() * diceFaces.length);
    setDiceIndex(diceFaces[num]);
  };

  return (
    <View style={styles.Wrapper}>
      {diceIndex && <Image style={styles.imageStyle} source={diceIndex} />}
      <TouchableOpacity style={styles.btnStyle} onPress={() => onPressButton()}>
        <Text style={styles.textStyle}>Roll The Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 140,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageStyle: {
    height: 320,
    width: 320,
    marginBottom: 30,
  },
});
