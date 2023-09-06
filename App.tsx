import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainMenu from './components/main-menu/MainMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <MainMenu></MainMenu>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    paddingTop: 40,
  },
});
