import React, { useState } from "react";
import { FlatList } from "react-native";

import { ListItem } from "../components/lists/ListItem";
import { Screen } from "../components/Screen";
import { ListItemSeparator } from "../components/lists/ListItemSeparator";
import { ListItemDeleteAction } from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mauro.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mauro.jpg"),
  },
];

export const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

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
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../assets/mauro.jpg"),
            },
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mauro.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};
