import { ListItem } from '@rneui/base';
import { StyleSheet, View } from 'react-native';

export default function MainMenuItem(props) {
return (
    <View style={{paddingTop: 20}}>
      <ListItem>
        <ListItem.Content style={styles.listItem}>
          <ListItem.Title></ListItem.Title>
          <ListItem.Subtitle></ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 20,
  },
});
