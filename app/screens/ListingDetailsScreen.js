import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { AppText } from "../components/AppText";
import { colors } from "../config/colors";

export const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.cardTitle}>Red jacket for sale!</AppText>
        <AppText style={styles.cardSubtitle}>$100</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "500",
    paddingBottom: 8,
  },
  cardSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
  image: {
    width: "100%",
    height: 300,
  },
});
