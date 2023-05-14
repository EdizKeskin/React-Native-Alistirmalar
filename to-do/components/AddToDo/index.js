import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const AddToDo = ({ todos, setTodos }) => {
  const [text, setText] = useState("");
  const addToDo = () => {
    const updatedTodos = [...todos];
    updatedTodos.push({ title: text, isDone: false, id: Date.now() });
    setTodos(updatedTodos);
    setText("");
  };
  const disabled = text === "" ? true : false;

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Add todo..."
      />
      <TouchableOpacity
        style={[styles.button, disabled && styles.disabledButton]}
        onPress={addToDo}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToDo;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#a1a1aa",
    padding: 10,
    width: "100%",
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    width: "100%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#a3e635",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
