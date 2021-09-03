import React, { useState } from "react";

import { Screen } from "./app/components/Screen";
import { AppPicker } from "./app/components/AppPicker";
import { AppTextInput } from "./app/components/AppTextInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        icon="apps"
        placeholder="category"
        items={categories}
        selectedItem={category}
        onSelectedItem={(item) => setCategory(item)}
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
