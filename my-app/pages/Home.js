import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo a página inicial</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b21368',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});