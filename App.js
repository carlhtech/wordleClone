// Youtube 1:15:58

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert } from 'react-native';
import { colors, CLEAR, ENTER } from './src/constants';
import Game from './src/components/Game';


export default function App() {
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
    fontSize: 42,
    //fontWeight: "bold",
    letterSpacing: 7,
    marginTop: 50
  }
});
