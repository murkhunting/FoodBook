import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";

export default function UserGuest () {
    return (
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image 
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil de FoodBook</Text>
            <Text style={styles. description}>
                What would the perfect restaurant be like for you? Search and view the best restaurants in a simple way, vote which one you liked the most and comment on how your experience has been. 
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    viewBody:{
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40,
        marginTop: 50,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
    },
    description:{
        textAlign="center",
        marginBottom= 20,
    }
})