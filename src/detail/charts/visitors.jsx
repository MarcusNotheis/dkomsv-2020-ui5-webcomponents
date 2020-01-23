import { LineChart } from '@ui5/webcomponents-react-charts';
import chartData from './chartDataVisitors';
import React from 'react';
import { Title, TitleLevel } from '@ui5/webcomponents-react';

const VisitorsChart = () => {
  return (
    <>
      <Title level={TitleLevel.H3}>Avg. Visitors per Hour</Title>
      <LineChart
        datasets={chartData}
        width={'100%'}
        labels={['8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM']}
      />
    </>
  );
};

export default VisitorsChart;
