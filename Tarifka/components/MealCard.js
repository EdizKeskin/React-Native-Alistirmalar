import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const MealCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: item.strMealThumb }} />
      <Text style={styles.text}>{item.strMeal}</Text>
    </TouchableOpacity>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 200,
    borderRadius: 10,
  },
  text: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
