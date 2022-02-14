import { Text } from 'react-native-elements';
import { TextInput, StyleSheet, View } from 'react-native';
import React from 'react';

const ECInputField = ({ ...props }) => {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.field}
                onChangeText={(value: any) => props.onChange(value)}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        height: 80,
        marginTop: 10,
    },
    label: {
        marginHorizontal: 9,
        fontWeight: 'bold'
    },
    field: {
        marginHorizontal: 4,
        elevation: 3,
        padding: 10,
        height: 60,
        borderColor: 'silver',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white'
    }
})

export default ECInputField;