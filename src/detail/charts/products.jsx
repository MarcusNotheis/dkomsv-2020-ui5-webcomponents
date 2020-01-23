import { FlexBox, FlexBoxDirection, Title, TitleLevel } from '@ui5/webcomponents-react';
import { BarChart } from '@ui5/webcomponents-react-charts';
import React from 'react';
import chartData from './chartDataProducts';

const ProductsChart = () => {
  return (
    <FlexBox direction={FlexBoxDirection.Column} width="50%">
      <Title level={TitleLevel.H3}>Top 5 Products</Title>
      <BarChart
        datasets={chartData}
        width={'100%'}
        labels={['Super Desktop', 'Smart Mobile', 'Crystal Display', 'Power Charger', 'Hacker Keyboard']}
      />
    </FlexBox>
  );
};

export default ProductsChart;
