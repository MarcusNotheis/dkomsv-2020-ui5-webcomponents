import { FlexBox, Form, FormGroup, FormItem, ObjectPage, ObjectPageSection, Text } from '@ui5/webcomponents-react';
import React from 'react';
import ProductsCharts from './charts/products';
import VisitorsChart from './charts/visitors';
import Employees from './employees';
import storeFront from './storeFront.jpg';
import masterdata from './storeMasterData';
import ProductsTable from './table';

const renderHeader = () => {
  return (
    <Form>
      <FormGroup title="Store Data" style={{ width: '18rem' }}>
        <FormItem labelText="Address">
          <Text>{masterdata.address}</Text>
        </FormItem>
        <FormItem labelText="Store Manager">
          <Text>{masterdata.storeManager}</Text>
        </FormItem>
        <FormItem labelText="Revenue">
          <Text>{masterdata.revenue}</Text>
        </FormItem>
      </FormGroup>
      <FormGroup title="Opening Hours" style={{ width: '250px' }}>
        {Object.entries(masterdata.openingHours).map(([day, hours]) => (
          <FormItem labelText={day} key={day}>
            <Text>{hours}</Text>
          </FormItem>
        ))}
      </FormGroup>
    </Form>
  );
};

const StoreDetail = () => {
  return (
    <ObjectPage
      title={masterdata.storeName}
      subTitle={masterdata.storeType}
      renderHeaderContent={renderHeader}
      image={storeFront}
      alwaysShowContentHeader
    >
      <ObjectPageSection id="store-analytics" title="Store Analytics">
        <FlexBox>
          <VisitorsChart />
          <ProductsCharts />
        </FlexBox>
      </ObjectPageSection>
      <ObjectPageSection id="product-overview" title="Product Overview">
        <ProductsTable />
      </ObjectPageSection>
      <ObjectPageSection id="employees" title="Store Staff">
        <Employees />
      </ObjectPageSection>
    </ObjectPage>
  );
};

export default StoreDetail;
