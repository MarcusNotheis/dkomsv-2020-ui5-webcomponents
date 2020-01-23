import { FlexBox, FlexBoxDirection, Title, TitleLevel } from '@ui5/webcomponents-react';
import { LineChart } from '@ui5/webcomponents-react-charts';
import React from 'react';
import chartData from './chartDataVisitors';

const VisitorsChart = () => {
  return (
    <FlexBox direction={FlexBoxDirection.Column} width="50%">
      <Title level={TitleLevel.H3}>Avg. Visitors per Hour</Title>
      <LineChart
        datasets={chartData}
        width={'100%'}
        labels={['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM']}
      />
    </FlexBox>
  );
};

export default VisitorsChart;
