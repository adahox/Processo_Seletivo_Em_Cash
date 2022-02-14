
import { Text } from 'react-native-elements';
import {  View, StyleSheet } from 'react-native';
import React from 'react';
import RoutedComponent from '../Core/RoutedComponent';
export default class Home extends RoutedComponent {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cards}>
                    <View style={styles.card}>
                        <Text style={styles.h1}>EMCASH</Text>
                        <Text style={styles.h2}>PROCESSO SELETIVO</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       margin: 5,
       flex: 1,
    },
    cards: {
        flexDirection: 'row',
        height: 100,
        flex: 1
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderColor: 'white',
        borderWidth: 3,
   },
   h1: {
        fontSize: 40,
        color: 'gray'
   },
   h2: {
    fontSize: 18,
    color: 'gray'
}
})