import Link from 'next/link'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const BSNavLink = (props) => {
  const {route, title} = props;
  return(
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand"href="/">Hugo Meza</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BSNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BSNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BSNavLink route="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BSNavLink route="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BSNavLink route="/cv" title="CV" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;