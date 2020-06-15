
import React from 'react';
import { shallow } from 'enzyme';

import { UsersList } from './UsersList';
import { PortalListItem } from '../Components/Styled/Layout/List/ListItem';

describe('<UsersList />', () => {
  const mockFetchAllUsers = jest.fn();
  const props = {
    fetchAllUsers: mockFetchAllUsers,
    users: [{}]
  };
  const wrapper = shallow(<UsersList {...props}><PortalListItem /></UsersList>);

  it('dispatches the `fetchAllUsers()` method', () => {
    expect(mockFetchAllUsers).toHaveBeenCalledTimes(1);
  });

  it('renders "Users" list with items', () => {
    expect(wrapper.contains(<PortalListItem />)).toBeTruthy();
  });
});
