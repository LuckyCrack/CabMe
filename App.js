import React from "react";
import { View, Text, StyleSheet,StatusBar, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({});