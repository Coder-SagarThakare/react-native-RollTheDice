/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;
const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return <Text>Hello</Text>;
}

const styles = StyleSheet.create({
  diceImage: {},
});

export default App;
