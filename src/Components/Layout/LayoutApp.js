
import React from 'react';
import PropTypes from 'prop-types';

import { PortalHeader } from './Header';
import { PortalSidebar } from './Sidebar';
import { PortalBreadcrumb } from './Breadcrumb';
import { PortalFooter } from './Footer';

import { Layout } from 'antd';
const { Content } = Layout;

const LayoutApp = props => {
  return (
    <Layout className='layout'>

      <PortalSidebar />

      <Layout>
        <PortalHeader />

        <Content className='page-content'>

          <PortalBreadcrumb />

          <div className='page-content-bg'>
            { props.children }
          </div>
        </Content>

        <PortalFooter />
      </Layout>
    </Layout>
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
