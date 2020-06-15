
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link = styled(ReactRouterLink)`
  color: ${({color}) => color ? color : 'black'};
`;

export default Link;
