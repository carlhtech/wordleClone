import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { colors } from './src/constants';
import Keyboard from './src/components/Keyboard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>WORDLE</Text>

      <View style={styles.map}>
        <View style={styles.row}>
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
      </View>

      <Keyboard />
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
    color: colors.lightgrey,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7
  }
});
