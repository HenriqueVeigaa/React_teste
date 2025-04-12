import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Example() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Componente de exemplo</Text>
            <Text style={styles.text}>Repetição</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "orange"
    },
    text:{
        fontWeight: "bold"
    }
})