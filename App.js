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
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="category" items={categories} />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
