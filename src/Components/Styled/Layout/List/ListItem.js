
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

const PortalListItem = (props) => {
  const { item: { id, label, to = '' } } = props;

  return (
    <List.Item key={id} as={Link} to={to}>
      <List.Content>
        <List.Header>{label}</List.Header>
      </List.Content>
    </List.Item>
  );
};
PortalListItem.propTypes = {
  item: PropTypes.object
};

export { PortalListItem };
