import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { defaultStyles } from "../config/styles";
import { AppText } from "./AppText";
import { Screen } from "./Screen";
import { PickerItem } from "./PickerItem";
import { colors } from "../config/colors";

export const AppPicker = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectedItem,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isModalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setIsModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: defaultStyles.colors.light,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    color: colors.lightText,
  },
});
