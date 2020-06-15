
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Header, Segment } from 'semantic-ui-react';

const PortalCard = (props) => {
  const { title } = props;

  return (
    <Card fluid>
      <Card.Content as={Segment} inverted color='teal' textAlign='center'>
        <Header>{ title }</Header>
      </Card.Content>
      <Card.Content>
        { props.children }
      </Card.Content>
    </Card>
  );
};

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
PortalCard.propTypes = propTypes;

export default PortalCard;
