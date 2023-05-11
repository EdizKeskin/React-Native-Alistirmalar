import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import data from "./mocks/data.json";
import Card from "./components/Card";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [text, setText] = useState("");
  const renderItem = ({ item }) => <Card item={item} />;

  const handleSearch = (text) => {
    setText(text);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullWith}>
        <Text style={styles.title}>PatiStore</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleSearch}
          value={text}
          placeholder="Search...."
          inputMode="search"
        />
      </View>
      <FlatList
        style={styles.fullWith}
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <StatusBar hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#800080",
    alignSelf: "flex-start",
    margin: 10,
    marginTop: 30,
  },
  input: {
    backgroundColor: "#eceff1",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignSelf: "center",
    width: "95%",
  },
  fullWith: {
    width: "95%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#800080",
    alignSelf: "flex-start",
    margin: 10,
    marginTop: 30,
  },
  input: {
    backgroundColor: "#eceff1",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignSelf: "center",
    width: "95%",
  },
});
