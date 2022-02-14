import React from 'react';
import {  Text, View, Pressable, StyleSheet } from 'react-native';
import TrianglesService from '../services/trianglesService';
import ECInputField from './ECComponents/ECInputField';

const saveTriangle = async  ({ladoA, ladoB, ladoC}: any) => {
    let services = new TrianglesService();
    let response = await services.create({  
        ladoA, ladoB, ladoC
    });
}

const TriangleRegister = () => {

    const [ladoA, onChangeA] = React.useState("");
    const [ladoB, onChangeB] = React.useState("");
    const [ladoC, onChangeC] = React.useState("");
    
    return (
        <View>
            <ECInputField label="lado A" onChange={onChangeA} value={ladoA} placeholder="Lado A" />
            <ECInputField label="lado B" onChange={onChangeB} value={ladoB} placeholder="Lado B" />
            <ECInputField label="lado C" onChange={onChangeC} value={ladoC} placeholder="Lado C" />
            <Pressable style={styles.button} onPress={ async () => { await saveTriangle({ladoA, ladoB, ladoC})} }>
                <Text style={styles.text}>Registrar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      height: 50,
      marginTop: 40,
      marginHorizontal: 5,
      elevation: 3,
      backgroundColor: '#007bff',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

export default TriangleRegister;