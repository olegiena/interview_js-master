import React from 'react';
import ItemList from '../item-list';
import {
  withData,
  withApiService,
  withChildFunction,
  compose } from '../hoc-helpers';

const renderName = ({ id, first_name, last_name, email }) => <div key={id} className='d-flex justify-content-between'><a href={id}>{first_name} {last_name}</a> <a href={'mailto:'+email}>{email}</a></div>;

const mapPersonMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllUsers
  };
};

const PersonList = compose(
                     withApiService(mapPersonMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

export {
  PersonList,
};
