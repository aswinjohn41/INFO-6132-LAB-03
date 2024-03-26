import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from './TransactionList';
import TransactionDetails from './TransactionDetailsComponent';

const Stack = createStackNavigator();

const TransactionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="TransactionsList">
      <Stack.Screen name="TransactionsList" component={TransactionList} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetails} />
    </Stack.Navigator>
  );
};

export default TransactionComponent;
