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
        labels={['Astro Phone 6', 'Ergonomic Keyboard', 'Copymaster', 'Flat Watch HD32', 'Gaming Monster Pro']}
      />
    </FlexBox>
  );
};

export default ProductsChart;
