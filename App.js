import React from "react";
import { Screen } from "./app/components/Screen";
import { TextInput } from "react-native";

export default function App() {
  return (
    <Screen>
      <TextInput placeholder="First Name" />
    </Screen>
  );
}
