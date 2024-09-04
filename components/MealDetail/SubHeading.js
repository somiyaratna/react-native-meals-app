import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";

const SubHeading = ({ children }) => {
  return (
    <View style={styles.subHeadingContainer}>
      <Text style={styles.subHeading}>{children}</Text>
    </View>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  subHeading: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeadingContainer: {
    marginVertical: 4,
    marginHorizontal: 100,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
