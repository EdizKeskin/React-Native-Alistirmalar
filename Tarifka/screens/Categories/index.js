import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import CategoryCard from "../../components/CategoryCard";

const Categories = ({ navigation }) => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const { data, loading, error } = useFetch(url);

  const navigateMealList = (category) => {
    navigation.navigate("MealList", { category });
  };

  const renderCategory = ({ item }) => (
    <CategoryCard
      item={item}
      onPress={() => navigateMealList(item.strCategory)}
    />
  );

  return (
    <View>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
