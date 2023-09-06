import { ListItem } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import MainMenuItem from '../main-menu-item/MainMenuItem';

export default function MainMenu() {
  return (
    <View style={{paddingTop: 20}}>
      <MainMenuItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 20,
  },
});
