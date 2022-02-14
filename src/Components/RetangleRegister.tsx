import React from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import ECInputField from './ECComponents/ECInputField';
import RetangleService from '../services/retanglesService';

const saveRetangle = async  ({base, altura}: any) => {
    console.log('uma mensagem ', {base, altura});
    let services = new RetangleService();
    let response = await services.create({  
        base,
        altura,
    });
    console.log(response);

}

const RetangleRegister = () => {

    const [base, onChangeBase] = React.useState("");
    const [altura, onChangeAltura] = React.useState("");

    const refs = React.useRef();

    return (
        <View>
            <ECInputField label="Base" onChange={ (base: any) => onChangeBase(base) } value={base} placeholder="Base do Retangulo" />
            <ECInputField label="Altura" onChange={ (altura: any) => onChangeAltura(altura) } value={altura} placeholder="Altura do Retangulo" />
            <Pressable style={styles.button} onPress={ async () => { await saveRetangle({base, altura})} }>
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

export default RetangleRegister;