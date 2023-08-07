import React from 'react';
import { View, StyleSheet, Text, Image } from '@react-pdf/renderer';
import logo from './assets/images/logo-pentagon.png';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#0078d7',
  },
  containerBlack: {
    flexDirection: 'row',
    // borderBottomColor: '#000000',
    backgroundColor: '#000000',
    borderBottomWidth: 1,
    height: 20,
    textAlign: 'left',
    fontStyle: 'bold',
    flexGrow: 1,
  },
  containerWhite: {
    flexDirection: 'row',
    // borderBottomColor: '#ffffff',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    height: 20,
    textAlign: 'left',
    fontStyle: 'bold',
    flexGrow: 1,
  },
  container: {
    flexDirection: 'row',
    borderBottomColor: '#0078d7',
    backgroundColor: '#0078d7',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 78,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: '#0078d7',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
},
  logo: {
    width: 66,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  textCenter: {
    width: '50%',
    // borderRightColor: borderColor,
    // borderRightWidth: 1,
    textAlign: 'center',
    fontSize: 8,
  },
  textChild: {
    width: '30%',
    // borderRightColor: borderColor,
    // borderButonWidth: 1,
    textAlign: 'left',
  },
  textBlack:{
    width: '12%',
    fontSize: 8,
    // borderTopColor: borderColor,
    // borderTopWidth: 1,
    textAlign: 'left',
    color: '#ffffff',
    // backgroundColor: '#000000',
  },
  textWhite:{
    width: '17%',
    fontSize: 8,
    // borderTopColor: borderColor,
    // borderTopWidth: 1,
    textAlign: 'left',
    color: '#000000',
    // backgroundColor: '#ffffff',
  },
  reportTitle:{
    color: '#ffffff',
    letterSpacing: 2,
    fontSize: 18,
    textAlign: 'left',
  },
});

  const InvoiceHeader = ({ invoice }) => (
    <View style={styles.tableContainer}>
      <View style={styles.container}>
        <Image style={styles.logo} src={`./dist/pdf${logo}`} />
        <Text style={styles.textCenter}>
          {'PENTAGON HOSPITALITY GROUP LLC.'}
          {`\n`}
          {'1122 WENTWORTH DR'}
          {`\n`}
          {'PEARLAND TX 77584'}
          {`\n`}
          {'305-898-3850'}
        </Text>
        <Text style={styles.textChild}>
          <Text style={styles.reportTitle}>Invoice</Text>
          {`\n`}
          <View style={styles.containerBlack}>
            <Text style={styles.textBlack}>Number:{'    '}</Text>
          </View>
          <View style={styles.containerWhite}>
            <Text style={styles.textWhite}>{invoice.code}</Text>
          </View>
          {`\n`}
          <View style={styles.containerBlack}>
            <Text style={styles.textBlack}>Date:{'          '}</Text>
          </View>
          <View style={styles.containerWhite}>
            <Text style={styles.textWhite}>{invoice.date}</Text>
          </View>
        </Text>
      </View>
    </View>
  );

  export default InvoiceHeader
