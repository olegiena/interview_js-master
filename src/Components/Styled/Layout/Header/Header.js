
import React from 'react';
import { Menu, Segment, Icon, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { PortalHeaderLogoTitle, PortalHeaderMenu } from './styled';

const PortalHeader = () => {
  return (
    <PortalHeaderMenu fixed='top' size='large' color='teal' inverted stackable borderless>
      <Menu.Item name='home' as={Link} to='/'>
        <Segment.Inline>
          <Icon link name='shipping fast' size='huge' inverted />
        </Segment.Inline>
        <Segment.Inline>
          <Header inverted>
            <Header.Content>
              <PortalHeaderLogoTitle>
                {/*TODO:*/}
                AppName
              </PortalHeaderLogoTitle>
            </Header.Content>
          </Header>
        </Segment.Inline>
      </Menu.Item>
    </PortalHeaderMenu>
  );
};

export default PortalHeader;
