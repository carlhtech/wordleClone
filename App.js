// Youtube 1:15:58

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import { colors, CLEAR, ENTER } from './src/constants';
import Game from './src/components/Game';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    Kaushan: require('./assets/fonts/Kaushan.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>RANDLE</Text>
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
    fontSize: 55,
    fontFamily: "Kaushan",
    letterSpacing: 7,
    marginTop: 30
  }
});
