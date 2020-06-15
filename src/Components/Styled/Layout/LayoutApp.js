
import React from 'react';
import PropTypes from 'prop-types';

import { PortalHeader } from './Header';
import { PortalSidebar } from './Sidebar';
import { PortalLayoutAppMain } from './styled';

const LayoutApp = props => {
  return (
    <>
      <PortalHeader />

      <PortalSidebar />

      <PortalLayoutAppMain basic>
        { props.children }
      </PortalLayoutAppMain>
    </>
  );
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
LayoutApp.propTypes = propTypes;

export default LayoutApp;
