
import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { PortalSidebarMenu } from './styled';

const PortalSidebar = () => {
  return (
    <PortalSidebarMenu borderless stackable icon='labeled' fixed='left' size='large' vertical>
      <Menu.Item name='users' as={NavLink} activeClassName='active' to='/users'>
        <Icon name='users' />
        Users
      </Menu.Item>
    </PortalSidebarMenu>
  );
};

export default PortalSidebar;
