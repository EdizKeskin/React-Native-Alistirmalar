import {
  ActivityIndicator,
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";

const MealDetail = ({ route }) => {
  const url = `https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  const item = data?.meals[0];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.thumbcontainer}>
        <Image style={styles.image} source={{ uri: item.strMealThumb }} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.strMeal}</Text>
          <Text style={styles.area}>{item.strArea}</Text>
        </View>
        <Text style={styles.instructions}>{item.strInstructions}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(item.strYoutube)}
        >
          <Text style={styles.buttonText}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbcontainer: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    width: "100%",
    height: "100%",
    padding: 10,
  },
  header: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 10,
    gap: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  area: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
  },
  button: {
    backgroundColor: "#dc2626",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
