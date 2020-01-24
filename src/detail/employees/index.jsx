import { FlexBox, FlexBoxWrap } from '@ui5/webcomponents-react';
import React from 'react';
import { EmployeeCard } from './EmployeeCard';
import data from './employees';

const Employees = () => {
  return (
    <FlexBox wrap={FlexBoxWrap.Wrap}>
      {data.map((employee) => (
        <EmployeeCard
          key={employee.id}
          firstName={employee.FirstName}
          lastName={employee.LastName}
          address={employee.Address}
          city={employee.City}
          region={employee.Region}
          postalCode={employee.PostalCode}
          country={employee.Country}
          phone={employee.HomePhone}
        />
      ))}
    </FlexBox>
  );
};

export default Employees;
