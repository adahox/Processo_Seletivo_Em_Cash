import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// components
import Home from './src/Components/Home';
import RegisterPolygon from './src/Components/RegisterPolygon';
import { RootSiblingParent } from 'react-native-root-siblings';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="RegisterPolygon"
            component={RegisterPolygon}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chart-pie" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}