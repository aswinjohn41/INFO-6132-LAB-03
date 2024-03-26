import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionsContext } from './Transaction'; // Import the context

const TransactionList = ({ navigation }) => {
  const { transactionsData } = useContext(TransactionsContext); // Use the context to get transactionsData

  const renderTransactionItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
      <View style={styles.transactionItem}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTransactionItem}
        contentContainerStyle={styles.transactionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  transactionList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  transactionName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  transactionAmount: {
    fontSize: 16,
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default TransactionList;
