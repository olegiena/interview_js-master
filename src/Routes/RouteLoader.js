
import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const RouteLoader = ({ text }) => (
  <Segment style={{ height: '100vh' }}>
    <Dimmer active inverted>
      <Loader size='large'>{ text || 'Loading' }</Loader>
      <footer style={{
        color: '#000',
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        textAlign: 'center'
      }}>/*TODO:*/AppName</footer>
    </Dimmer>
  </Segment>
);

RouteLoader.propTypes = {
  text: PropTypes.string,
  component: PropTypes.func,
  layout: PropTypes.func
};

export default RouteLoader;
