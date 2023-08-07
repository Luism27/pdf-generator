import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#0078d7'
const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        // borderWidth: 1,
        borderColor: '#ffffff',
    },
    tableContainerRest: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    containerSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 16,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        width: '20%',
    },
    containerSpaceText: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 16,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        width: '40%',
    },
    containerText: {
        flexDirection: 'row',
        borderLeftColor: '#0078d7',
        borderRightColor: '#0078d7',
        // backgroundColor: '#0078d7',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignItems: 'center',
        height: 16,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        width: '40%',
    },
    containerTextEnd: {
        flexDirection: 'row',
        borderLeftColor: '#0078d7',
        borderBottomColor: '#0078d7',
        borderRightColor: '#0078d7',
        // backgroundColor: '#0078d7',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 16,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        width: '40%',
    },
    containerTitle: {
        flexDirection: 'row',
        borderBottomColor: '#0078d7',
        backgroundColor: '#0078d7',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 16,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        width: '40%',
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
    textBody: {
        width: '100%',
        textAlign: 'left',
        // borderLeftColor: borderColor,
        // borderLeftWidth: 1,
        // borderRightColor: borderColor,
        // borderRightWidth: 1,
        paddingLeft: 2,
        marginTop: 1,
        paddingTop: 1,
    },
    textTitle: {
        width: '100%',
        textAlign: 'left',
        paddingRight: 8,
        color: '#ffffff',
        paddingLeft: 2,
    },
  });


const InvoiceBillTo = ({ invoice }) => {
    return(
        <>
            <View style={styles.tableContainer}>
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Bill To</Text>
                </View>
                <View style={styles.containerSpace}>
                    <Text style={styles.space}>{''}</Text>
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>PERIOD</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.textBody}>{invoice.hotel}</Text>
                </View>
                <View style={styles.containerSpace}>
                    <Text style={styles.space}>{''}</Text>
                </View>
                <View style={styles.containerTextEnd}>
                    <Text style={styles.textBody}>
                        {invoice.startDate}
                        {' TO '}
                        {invoice.endDate}
                    </Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.textBody}>{invoice.address}</Text>
                </View>
                <View style={styles.containerSpace}>
                    <Text style={styles.space}>{''}</Text>
                </View>
                <View style={styles.containerSpaceText}>
                    <Text style={styles.textBody}>{''}</Text>
                </View>
                {/* <View style={styles.containerText}>
                    <Text style={styles.textBody}>{invoice.address}</Text>
                </View>
                <View style={styles.containerSpace}>
                    <Text style={styles.space}>{''}</Text>
                </View>
                <View style={styles.containerSpaceText}>
                    <Text style={styles.textBody}>{''}</Text>
                </View> */}
                <View style={styles.containerTextEnd}>
                    <Text style={styles.textBody}>{'USA'}</Text>
                </View>
                <View style={styles.containerSpace}>
                    <Text style={styles.space}>{''}</Text>
                </View>
                <View style={styles.containerSpaceText}>
                    <Text style={styles.textBody}>{''}</Text>
                </View>
            </View>
        </>
    )
};
  
  export default InvoiceBillTo