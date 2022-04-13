import React from 'react'
import { View, Text, StyleSheet,StatusBar, TouchableOpacity,Image } from "react-native";
import { URLS } from '../config/urls'
import { COLORS } from '../config/colors'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <View style={styles.header}>
            <Image source={{
                uri: URLS.LOGO_URL
            }}
            style={styles.logo}
            />
            <NavOptions/>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 15,
  },
  logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});