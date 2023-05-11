import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Header = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <Text style={styles.title}>PatiStore</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Search...."
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
