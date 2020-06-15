
import React from 'react';

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class PortalSidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme='light'>

        <div className="app-logo">
          <Icon type="rise" className="app-logo-icon" />
        </div>

        <Menu theme="light" defaultSelectedKeys={['users']} mode="inline">
          <Menu.Item key="users">
            <Icon type="menu-fold" />
            <span>Users</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default PortalSidebar;
