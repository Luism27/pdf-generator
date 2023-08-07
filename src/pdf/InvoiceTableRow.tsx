import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#0078d7'
const styles = StyleSheet.create({
    rowPar: {
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
        // borderBottomColor: '#0078d7',
        // borderBottomWidth: 1,
        alignItems: 'center',
        height: 16,
        fontStyle: 'bold',
    },
    rowImpar: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        // borderBottomColor: '#0078d7',
        // borderBottomWidth: 1,
        alignItems: 'center',
        height: 16,
        fontStyle: 'bold',
    },
    name: {
        width: '30%',
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        paddingLeft: 8,
        textAlign: 'left',
    },
    position: {
        width: '20%',
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        paddingRight: 8,
        textAlign: 'left',
    },
    qty: {
        width: '15%',
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        paddingRight: 8,
        textAlign: 'left',
    },
    rate: {
        width: '15%',
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        paddingRight: 8,
        textAlign: 'left',
    },
    amount: {
        width: '20%',
        paddingRight: 8,
        textAlign: 'left',
    },
  });


const InvoiceTableRow = ({items}) => {
    const rows = items.map( (item, index) => 
        <View style={index % 2 === 0 ? styles.rowPar : styles.rowImpar} key={index.toString()}>
            <Text style={styles.name}>{item.employee}</Text>
            <Text style={styles.position}>{item.position}</Text>
            <Text style={styles.qty}>{item.hours}</Text>
            <Text style={styles.rate}>
                {item.price.toLocaleString('us-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: Math.ceil(item.price % 1) * 2,
                })}
            </Text>
            <Text style={styles.amount}>
                {item.total.toLocaleString('us-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: Math.ceil(item.total % 1) * 2,
                })}
            </Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
export default InvoiceTableRow