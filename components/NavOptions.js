import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity,TouchableHighlight } from 'react-native'
import React from 'react'
import { URLS } from '../config/urls'
import { COLORS } from '../config/colors'
import Icons from 'react-native-vector-icons/Feather'

const data = [
    {
        id: 124,
        title: 'Get a cab',
        image: URLS.GET_RIDE,
        screen: 'MapScreen',
    },
    {
        id: 125,
        title: 'Give a ride',
        image:  URLS.GET_FOOD,
        screen: 'MapScreen',
    },
];

const NavOptions = () => {
  return (
        <FlatList
            data={data}
            horizontal
            keyEXtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() =>{ console.log(item.title) }}>
                    <View>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.icon}>
                            <Icons name="arrow-right-circle" size={30} color={COLORS.LIGHT_BLACK} />
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
  )
}

const style = StyleSheet.create({
});

export default NavOptions

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLORS.LIGHT_WHITE,
        marginHorizontal: 5,
        padding: 10,
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
        color: COLORS.LIGHT_BLACK,
    },
    icon: {
        alignSelf: 'flex-end',
    },
})