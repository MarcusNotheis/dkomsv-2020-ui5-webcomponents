import { Form, FormItem, ObjectPage, ObjectPageSection, Text, FlexBox } from '@ui5/webcomponents-react';
import React from 'react';
import ProductsCharts from './charts/products';
import VisitorsChart from './charts/visitors';
import storeFront from './storeFront.jpg';
import masterdata from './storeMasterData';
import ProductsTable from './table';

const renderHeader = () => {
  return (
    <>
      <Form>
        <FormItem labelText="Address">
          <Text>{masterdata.address}</Text>
        </FormItem>
        <FormItem labelText="Store Manager">
          <Text>{masterdata.storeManager}</Text>
        </FormItem>
        <FormItem labelText="Revenue">
          <Text>{masterdata.revenue}</Text>
        </FormItem>
      </Form>
      <div>
        <Text>Opening Hours</Text>
        <Form>
          {Object.entries(masterdata.openingHours).map(([day, hours]) => (
            <FormItem labelText={day} key={day}>
              <Text>{hours}</Text>
            </FormItem>
          ))}
        </Form>
      </div>
    </>
  );
};

const StoreDetail = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
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
      </ObjectPage>
    </div>
  );
};

export default StoreDetail;
