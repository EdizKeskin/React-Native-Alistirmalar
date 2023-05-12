import { FlatList, StyleSheet, Text, View } from "react-native";
import todosData from "./mocks/todosData.json";
import { useState } from "react";
import Card from "./components/Card";
import AddToDo from "./components/AddToDo";

export default function App() {
  const [todos, setTodos] = useState(todosData);
  const renderTodo = ({ item }) => (
    <Card todo={item} setTodos={setTodos} todos={todos} />
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>ToDo List</Text>
      <Text style={styles.headerText}>
        You have {todos.filter((todo) => !todo.isDone).length} todos
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        ListHeaderComponent={renderHeader}
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.title}
      />
      <AddToDo setTodos={setTodos} todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: "100%",
  },
  flatList: {
    width: "95%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
