import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealCard from "../../components/MealCard";
import useFetch from "../../hooks/useFetch";

const MealList = ({ route, navigation }) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.category}`;
  const { data, loading, error } = useFetch(url);
  console.log(data);

  const navigateMealDetail = (id) => {
    navigation.navigate("MealDetail", { id });
  };

  const renderMeal = ({ item }) => (
    <MealCard item={item} onPress={() => navigateMealDetail(item.idMeal)} />
  );

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({});
