
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

const PortalSidebarMenu = styled(Menu)`
  &.ui.menu.fixed {
    margin-top: 9em;
  }
  &.ui.large.vertical.menu {
    width: 7em;
    background-color: lightgray;
  }
  &.ui.stackable.menu .item {
    width: 7em !important;
  }
  &.ui.stackable.menu .item:last-child {
    position: fixed !important;
    bottom: 0;
    width: 7em;
  }
`;

export { PortalSidebarMenu };
