import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withApiService } from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="first_name" label="First name:" />
      <Record field="last_name" label="Last name:" />
      <Record field="email" label="email:" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getUserDetails,
  }
};

export default withApiService(mapMethodsToProps)(PersonDetails);
