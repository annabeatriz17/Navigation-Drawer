import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao meu perfil</Text>
            <Image source={require("../assets/img/eu.jpg")} style={styles.image} />
            <Text style={styles.subtitulo}>Nome: Anna Beatriz</Text>
            <Text style={styles.subtitulo}>E-mail: annabeatrizbe13@gmail.com</Text>
            <Text style={styles.subtitulo}>Idade: 17 anos</Text>
            <Text style={styles.subtitulo}>Cidade: Valinhos</Text>
    </View>
    
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
    },
    image: {
        marginTop: 20,
        width: 200,
        height: 200, 
        borderRadius: 100,
    },
    subtitulo: {
        marginTop: 20,
        fontSize: 15,
    },
});
