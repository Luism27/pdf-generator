import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#0078d7'
const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    containerSpace: {
        flexDirection: 'row',
        // borderBottomColor: '#0078d7',
        // backgroundColor: '#0078d7',
        // borderBottomWidth: 1,
        alignItems: 'center',
        height: 16,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        width: '65%',
    },
    containerText: {
        flexDirection: 'row',
        borderBottomColor: '#0078d7',
        // backgroundColor: '#0078d7',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 16,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        width: '15%',
    },
    containerTotal: {
        flexDirection: 'row',
        borderBottomColor: '#ffffff',
        backgroundColor: '#0078d7',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 16,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        width: '20%',
        marginTop: 1,
    },
    row: {
        flexDirection: 'row',
        borderBottomColor: '#0078d7',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        fontStyle: 'bold',
    },
    space: {
        width: '100%',
        textAlign: 'left',
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        paddingRight: 8,
    },
    description: {
        width: '100%',
        textAlign: 'left',
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
        borderTopColor: borderColor,
        borderTopWidth: 1,
        paddingLeft: 2,
        marginTop: 1,
        paddingTop: 1,
    },
    total: {
        width: '100%',
        textAlign: 'left',
        paddingRight: 8,
        color: '#ffffff',
        paddingLeft: 2,
    },
  });


const InvoiceTableFooter = ({invoice}) => {
    return(
        <View style={styles.tableContainer}>
            <View style={styles.containerSpace}>
                <Text style={styles.space}>{' '}</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.description}>TOTAL DUE</Text>
            </View>
            <View style={styles.containerTotal}>
                <Text style={styles.total}>
                    {invoice.total.toLocaleString('us-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: Math.ceil(invoice.total % 1) * 2,
                    })}
                </Text>
            </View>
        </View>
    )
};
  
  export default InvoiceTableFooter