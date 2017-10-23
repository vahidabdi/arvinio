import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Menu,
  Image,
} from 'semantic-ui-react';

const Header = ({ currentUser }) => (
  <Menu inverted pointing size="huge" fixed="top">
    <Container>
      <Menu.Item as={NavLink} exact to="/dashboard" name="داشبورد" />
      <Menu.Item as={NavLink} to="/dashboard/survey/new" name="پرسشنامه" />
      <Menu.Menu position="right">
        <Menu.Item>
          <Image src={currentUser.picture} avatar />
          <span>{currentUser.email}</span>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

Header.propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
