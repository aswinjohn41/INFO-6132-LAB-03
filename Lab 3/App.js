import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TransactionComponent from './Components/TransactionComponent'
import SummaryComponent from './Components/SummaryComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransactionContainer } from './Components/Transaction';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionContainer>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Transactions"
            component={TransactionComponent}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="document-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Summary"
            component={SummaryComponent}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionContainer>
  );
}