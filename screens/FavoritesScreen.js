import React, { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Ionicons name="fast-food" size={100} color="white" />
        <Text style={styles.text}>
          You have no favorite meals. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 48,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
