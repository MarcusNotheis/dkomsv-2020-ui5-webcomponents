import '@ui5/webcomponents-icons/dist/icons/retail-store.js'
import {
  AnalyticalTable,
  FlexBox,
  FlexBoxDirection,
  Form,
  FormItem,
  ObjectPage,
  ObjectPageSection,
  Title,
  TitleLevel
} from "@ui5/webcomponents-react";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import React, { useCallback } from "react";
import productsChartData from './chartDataProducts';
import visitorChartData from './chartDataVisitors';
import products from './products';
import masterdata from './storeMasterData'

const StoreDetail = () => {

  const renderHeader = useCallback(() => {

    return (
      <Form>
        <FormItem labelText="Address">{masterdata.address}</FormItem>
        <FormItem labelText="Store Manager">{masterdata.storeManager}</FormItem>
        <FormItem labelText="Revenue">{masterdata.revenue}</FormItem>
      </Form>
    );
  }, []);

  return <ObjectPage title={masterdata.storeName}
                     subTitle={masterdata.storeType} renderHeaderContent={renderHeader}>
    <ObjectPageSection id="store-analytics" title="Store Analytics">
      <FlexBox>
        <FlexBox direction={FlexBoxDirection.Column} width="50%">
          <Title level={TitleLevel.H3}>Avg. Visitors per Hour</Title>
          <LineChart datasets={visitorChartData}
                     width={"100%"}
                     labels={['8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM']}/>
        </FlexBox>
        <FlexBox direction={FlexBoxDirection.Column} width="50%">
          <Title level={TitleLevel.H3}>Top 5 Products</Title>
          <BarChart datasets={productsChartData}
                    width={"100%"}
                    labels={['Super Desktop', 'Smart Mobile', 'Crystal Display', 'Power Charger', 'Hacker Keyboard']}/>
        </FlexBox>


      </FlexBox>

    </ObjectPageSection>
    <ObjectPageSection id="product-overview" title="Product Overview">
      <AnalyticalTable columns={[{ Header: 'Name', accessor: 'name' }, { Header: 'Price', accessor: 'price' }, {
        Header: 'In Stock',
        accessor: 'inStock'
      }, { Header: 'Manufacturer', accessor: 'company' }]} data={products}/>
    </ObjectPageSection>
  </ObjectPage>
};

export default StoreDetail;
