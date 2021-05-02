import React from "react";
import { StyleSheet, View, Text, ActivityIndicator} from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props) {
    const { isVisible, text } = props;

    return (
        <Overlay 
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}
        >
            <View style={styles.view}>
                <ActivityIndicator size="large" color="#4c5c46" />
                {/* solo mostraremos el texto si es necesario mostrarlo,
                si hay texto muestramelo con el siguiente condicional */}
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: 200,
        width: 200,
        backgroundColor: "rgba(205,208,203,0.8)",
        
        borderRadius: 15,
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e8eae6",
        borderRadius: 15,
    },
    text: {
        color: "#4c5c46",
        textTransform: "uppercase",
        marginTop: 30,
    }
});