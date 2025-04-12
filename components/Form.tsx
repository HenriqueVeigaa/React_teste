import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


   

export default function Form () {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrar, setMostrar] = useState(false);
    
    function Mostrar () {
        return(
        <Text>
            Nome: {nome} {"\n"}
            Email: {email} {"\n"}
            Senha: {senha} {"\n"}
        </Text>
        );
        
    }

    return (
       
        
        <View>
        <TextInput placeholder="Nome" style={styles.text_input} onChangeText={setNome}>
        </TextInput>

        <TextInput placeholder="Email" style={styles.text_input}  onChangeText={setEmail}>
            
        </TextInput>
        <TextInput placeholder="Senha" style={styles.text_input}  onChangeText={setSenha}>
            
        </TextInput>
        <TouchableOpacity style={styles.btn} onPress={() => setMostrar(true)}>
            {mostrar ? Mostrar(): null}
            <Text>Ver dados</Text>
        </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    text_input:{
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 2,
        marginTop: 5,
        backgroundColor: "white",
        borderRadius: 7
    },
    btn:{
        marginTop: 10,
        textAlign: "center",
        backgroundColor: "red",
        borderRadius: 4
    }
});