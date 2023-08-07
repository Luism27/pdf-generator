import React from 'react';
import ReactPDF, { Page, Document, StyleSheet } from '@react-pdf/renderer';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceHeader from './InvoiceHeader';
import InvoiceBillTo from './InvoiceBillTo';
// import logo from '../../../src/logo.png';

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 8,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});
const Invoice = ({invoice}) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <InvoiceHeader invoice={invoice} />
                <InvoiceBillTo invoice={invoice} />
                <InvoiceItemsTable invoice={invoice} />
            </Page>
        </Document>
    )
  };

export default async (invoice) => {
    return await ReactPDF.renderToStream(<Invoice {...{ invoice }} />);
};
