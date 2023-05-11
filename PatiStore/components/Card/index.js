import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Card = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.imgURL }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.inStock}>{item.inStock ? "" : "Out of Stock"}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#eceff1",
    margin: 10,
    alignItems: "center",
    gap: 10,
    borderRadius: 5,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: "#808080",
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  inStock: {
    color: "red",
  },
});
