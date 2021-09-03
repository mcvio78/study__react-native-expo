import React, { useState } from "react";

import { Screen } from "./app/components/Screen";
import { AppPicker } from "./app/components/AppPicker";
import { AppTextInput } from "./app/components/AppTextInput";

export default function App() {
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="category" />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
