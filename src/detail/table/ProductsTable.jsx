import React from 'react';
import products from './products';
import { AnalyticalTable } from '@ui5/webcomponents-react';

const ProductsTable = () => {
  return (
    <AnalyticalTable
      columns={[
        { Header: 'Name', accessor: 'name' },
        { Header: 'Price', accessor: 'price' },
        {
          Header: 'In Stock',
          accessor: 'inStock'
        },
        { Header: 'Manufacturer', accessor: 'company' }
      ]}
      data={products}
    />
  );
};

export default ProductsTable;
