import {
  FlexBox,
  FlexBoxDirection,
  Form,
  FormItem,
  ObjectPage,
  ObjectPageSection,
  Text
} from '@ui5/webcomponents-react';
import React from 'react';
import ProductsCharts from './charts/products';
import VisitorsChart from './charts/visitors';
import ProductsTable from './table/ProductsTable';
import storeFront from './storeFront.jpg';
import masterdata from './storeMasterData';

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
            <FlexBox direction={FlexBoxDirection.Column} width="50%">
              <VisitorsChart />
            </FlexBox>
            <FlexBox direction={FlexBoxDirection.Column} width="50%">
              <ProductsCharts />
            </FlexBox>
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
