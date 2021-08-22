import React from "react";
import { View } from "react-native";

import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { LoginScreen } from "./app/screens/LoginScreen";
import { Card } from "./app/components/Card";

export default function App() {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        image={require("./app/assets/jacket.jpg")}
        title="Red jacket for sale!"
        subTitle="$100"
      />
    </View>
  );
}
