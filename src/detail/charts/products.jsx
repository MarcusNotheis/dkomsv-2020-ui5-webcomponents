import { Title, TitleLevel } from '@ui5/webcomponents-react';
import { BarChart } from '@ui5/webcomponents-react-charts';
import chartData from './chartDataProducts';
import React from 'react';

const ProductsChart = () => {
  return (
    <>
      <Title level={TitleLevel.H3}>Top 5 Products</Title>
      <BarChart
        datasets={chartData}
        width={'100%'}
        labels={['Super Desktop', 'Smart Mobile', 'Crystal Display', 'Power Charger', 'Hacker Keyboard']}
      />
    </>
  );
};

export default ProductsChart;
