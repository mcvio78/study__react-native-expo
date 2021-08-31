import React from "react";

import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { LoginScreen } from "./app/screens/LoginScreen";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { MessagesScreen } from "./app/screens/MessagesScreen";
import { Screen } from "./app/components/Screen";
import { Icon } from "./app/components/Icon";
import { ListItem } from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="My Title"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}
