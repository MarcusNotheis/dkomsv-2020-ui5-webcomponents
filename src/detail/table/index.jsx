import { AnalyticalTable, ObjectStatus, Text, TextAlign, ValueState } from '@ui5/webcomponents-react';
import React from 'react';
import products from './products';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const tableColumns = [
  { Header: 'Product Name', accessor: 'Name' },
  { Header: 'Manufacturer', accessor: 'SupplierName' },
  { Header: 'Category', accessor: 'MainCategory' },
  {
    Header: 'Price',
    accessor: 'Price',
    hAlign: TextAlign.End,
    Cell: ({ cell: { value } }) => {
      return <Text>{currencyFormatter.format(value)}</Text>;
    }
  },
  {
    Header: 'In Stock',
    accessor: 'InStock',
    hAlign: TextAlign.End,
    Cell: ({ cell: { value } }) => {
      let state = ValueState.Success;
      if (value <= 10) {
        state = ValueState.Error;
      } else if (value <= 20) {
        state = ValueState.Warning;
      }
      return <ObjectStatus state={state}>{value}</ObjectStatus>;
    }
  }
];

const ProductsTable = () => {
  return <AnalyticalTable columns={tableColumns} data={products} />;
};

export default ProductsTable;
