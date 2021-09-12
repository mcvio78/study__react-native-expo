import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { ListItem } from '../components/lists/ListItem';
import { Screen } from '../components/Screen';
import { ListItemSeparator } from '../components/lists/ListItemSeparator';
import { ListItemDeleteAction } from '../components/lists/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'Title N1',
    description:
      'D1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur commodi consequuntur ducimus eveniet fugit ipsa iure iusto magnam maxime minima molestiae, nisi officiis provident quasi rem ullam veritatis voluptas.',
    image: require('../assets/mauro.jpg'),
  },
  {
    id: 2,
    title: 'Title N2',
    description:
      'D2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur commodi consequuntur ducimus eveniet fugit ipsa iure iusto magnam maxime minima molestiae, nisi officiis provident quasi rem ullam veritatis voluptas.',
    image: require('../assets/mauro.jpg'),
  },
];

export const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('message selected', item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            showChevrons
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: 'Title N1',
              description:
                'D1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur commodi consequuntur ducimus eveniet fugit ipsa iure iusto magnam maxime minima molestiae, nisi officiis provident quasi rem ullam veritatis voluptas.',
              image: require('../assets/mauro.jpg'),
            },
            {
              id: 2,
              title: 'Title N2',
              description:
                'D2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur commodi consequuntur ducimus eveniet fugit ipsa iure iusto magnam maxime minima molestiae, nisi officiis provident quasi rem ullam veritatis voluptas.',
              image: require('../assets/mauro.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
};
