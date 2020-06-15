
import React from 'react';
import PropTypes from 'prop-types';
import { MainMAuto } from './Main';
import { SegmentVH100 } from './Segment';

const LayoutLogin = props => {
  return (
    <SegmentVH100 color='teal' basic inverted>
      <MainMAuto>
        { props.children }
      </MainMAuto>
    </SegmentVH100>
  );
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
LayoutLogin.propTypes = propTypes;

export default LayoutLogin;
