import React from 'react';
import { Tab, TabView } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import TriangleRegister from './TriangleRegister';
import RetangleRegister from './RetangleRegister';

const RegisterPolygon = () => {

    const [index, setIndex] = React.useState(0);

    return (
        <View>
            <Tab value={index} onChange={(e) => setIndex(e)} indicatorStyle={{ backgroundColor: 'white', height: 3, }} variant="primary">
                <Tab.Item title="Retangle" titleStyle={{ fontSize: 12 }} icon={{ name: 'square', type: 'ionicon', color: 'white' }} />
                <Tab.Item title="Triangle" titleStyle={{ fontSize: 12 }} icon={{ name: 'triangle', type: 'ionicon', color: 'white' }} />
            </Tab>
            <TabView value={index} onChange={setIndex} animationType="spring">
                <TabView.Item style={style.row}>
                    <RetangleRegister />
                </TabView.Item>
                <TabView.Item style={style.row}>
                   <TriangleRegister />
                </TabView.Item>
            </TabView>
        </View>
    );
}

const style = StyleSheet.create({
    row: {
        width: '97%',
        margin: 5
    }
})

export default RegisterPolygon;