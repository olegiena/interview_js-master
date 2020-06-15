
import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PortalList = (props) => {
  const { items, children } = props;
  const elements = items.map((item) => {
    return (
      React.Children.map(children, (child) => {
        return React.cloneElement(child, { item });
      })
    );
  });

  return (
    <List>
      { elements }
    </List>
  );
};

PortalList.propTypes = {
  items: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export { PortalList };
