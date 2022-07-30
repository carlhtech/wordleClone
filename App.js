// Youtube 1:15:58

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import { colors, CLEAR, ENTER } from './src/constants';
import Game from './src/components/Game';
import { useFonts } from 'expo-font';
import { Image } from 'react-native';
import { neonBG } from './assets/images';


export default function App() {
  const [loaded] = useFonts({
    Kaushan: require('./assets/fonts/Kaushan.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={neonBG} style={styles.neonBackground} />
      <StatusBar style="light" />
      <Text style={styles.title}>Randle</Text>
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 75,
    fontFamily: "Kaushan",
    letterSpacing: 5,
    marginTop: 30
  },
  neonBackground: {
    zIndex: -100,
    height: 980,
    width: 390,
    maxWidth: 400,
    position: 'absolute',
    marginTop: -66,
  }
});
