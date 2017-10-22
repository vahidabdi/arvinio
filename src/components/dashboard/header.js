import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Segment,
  Menu
} from 'semantic-ui-react';

const Header = ({ currentUser }) => (
    <Menu inverted pointing size='huge' fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/dashboard' name='داشبورد' />
        <Menu.Item as={NavLink} to='/dashboard/survey/new' name='پرسشنامه' />
        <Menu.Menu position='right'>
          <Menu.Item as='a' name='خروج' />
        </Menu.Menu>
      </Container>
    </Menu>
)

export default Header;
