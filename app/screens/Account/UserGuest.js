import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"; 

export default function UserGuest () {
    const navigation = useNavigation();

    return (
        <ScrollView centerContent={true} style={styles.viewBody} scrollToOverflowEnabled={true}>
            <Image 
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
            />
            <View style={styles.btnView}>
                <Button
                    title="Check your profile"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("login")}
                />
            </View>
            <Text style={styles.title}>Check your FoodBook profile</Text>
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
        marginBottom: 10,
        
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
    },
    description:{
        textAlign: "center",
        marginBottom: 20,
    },
    btnView:{
        flex:1,
        alignItems: "center"
    },
    btnStyle:{
        backgroundColor: "#7c9473",
        borderRadius: 10,
    },
    btnContainer:{
        width: "70%",
        marginBottom: 10,
        
    }
})