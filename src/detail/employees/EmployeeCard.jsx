import {
  Avatar,
  AvatarSize,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  Icon,
  Label,
  Link,
  Text
} from '@ui5/webcomponents-react';
import React from 'react';
import { createUseStyles } from 'react-jss';
import profile from '../../appbar/profile.png';

const useStyles = createUseStyles(({ parameters }) => ({
  employeeCard: {
    width: '300px',
    height: '130px',
    backgroundColor: parameters.sapTile_Background,
    margin: '0 1rem 1rem 0',
    padding: '1rem',
    border: `1px solid ${parameters.sapField_BorderColor}`
  },
  employeeName: {
    marginLeft: '1rem',
    fontWeight: 'bold'
  },
  address: {
    margin: '0.5rem 0'
  },
  icon: {
    marginRight: '0.5rem'
  }
}));

export const EmployeeCard = (props) => {
  const { firstName, lastName, address, city, region, postalCode, country, phone } = props;

  const classes = useStyles();

  return (
    <FlexBox direction={FlexBoxDirection.Column} className={classes.employeeCard}>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Avatar image={profile} size={AvatarSize.M} />
        <Text className={classes.employeeName}>
          {firstName} {lastName}
        </Text>
      </FlexBox>
      <Label className={classes.address}>
        {[address, postalCode, city, region, country].filter(Boolean).join(', ')}
      </Label>
      <FlexBox alignItems={FlexBoxAlignItems.Center}>
        <Icon name="phone" className={classes.icon} />
        <Link href={`tel:${phone}`}>{phone}</Link>
      </FlexBox>
    </FlexBox>
  );
};
