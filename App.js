import React, { useState } from "react";
import { Screen } from "./app/components/Screen";
import { TextInput, Text } from "react-native";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
        maxLength={10}
        keyboardType="numeric"
        clearButtonMode="always"
        secureTextEntry
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
}
