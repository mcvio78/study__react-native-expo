import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Screen } from '../components/Screen';
import { ListItem } from '../components/lists/ListItem';
import { colors } from '../config/colors';
import { Icon } from '../components/Icon';
import { ListItemSeparator } from '../components/lists/ListItemSeparator';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

export const AccountScreen = () => (
  <Screen style={styles.screen}>
    <View style={styles.container}>
      <ListItem title="Mauro Vio" subTitle="mc@gmail.com" image={require('../assets/mauro.jpg')} />
    </View>
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            IconComponent={
              <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
            }
          />
        )}
      />
    </View>
    <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe27c" />} />
  </Screen>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
