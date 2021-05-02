import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";


import Tab from "./Tab"

const {width} = Dimensions.get("screen")

const TabBar = ({ state, navigation }) => {
    const {routes} = state;
    const [selected, setSelected] = useState("Home")
    const renderColor = (currentTab) => (currentTab === selected ? "#4c5c46" : "black");

    const handlePress = (activeTab, index) => {
        if (state.index !== index) { //este if lo ponemos porque si ya estamos en la misma pagina no queremos volver a cargarla
            setSelected(activeTab);
            navigation.navigate(activeTab);
        }
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {/* hacemos un map para ir a cada una de las pestañas (Tabs)
                y asi mostrarlas 1 a una con el estilo que queramos */}
                {routes.map((route, index) => (
                    <Tab 
                        tab={route} 
                        icon={route.params.icon}
                        onPress={ () => handlePress(route.name, index)} 
                        color={renderColor(route.name)} 
                        key={route.key}/>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        bottom: 20,
        width,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgba(205,208,203,0.8)",
        width: 360,
        borderRadius: 15,
    }
})

export default TabBar;