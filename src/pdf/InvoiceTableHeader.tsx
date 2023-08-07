import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#0078d7'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#0078d7',
        backgroundColor: '#0078d7',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 16,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        width: '30%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        color: '#ffffff',
        textAlign: 'left',
    },
    position: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        color: '#ffffff',
        textAlign: 'left',
    },
    qty: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        color: '#ffffff',
        textAlign: 'left',
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        color: '#ffffff',
        textAlign: 'left',
    },
    amount: {
        width: '20%',
        color: '#ffffff',
        textAlign: 'left',
    },
  });

  const InvoiceTableHeader = () => (
    <View style={styles.container}>
      <Text style={styles.description}>Name</Text>
      <Text style={styles.position}>Position</Text>
      <Text style={styles.qty}>Hours</Text>
      <Text style={styles.rate}>Rate</Text>
      <Text style={styles.amount}>Amount</Text>
    </View>
  );
  
  export default InvoiceTableHeader