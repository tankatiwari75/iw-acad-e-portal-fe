import React, {useState} from 'react';
// css file import
import "./navigationbar.css"

// React-router-dom
import {Link} from "react-router-dom";
import mainLogo from'./logo.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Navigationbar = (props) => {
  const [isOpen,
    setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/"><span className='display-5'><img  src={mainLogo} alt="E|Portal System"/></span></NavbarBrand>
        <NavbarToggler onClick={toggle}/> 
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to="/calendar" className='text-secondary'>Calendar</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Username
              </DropdownToggle>
              <DropdownMenu right>
                <Link to='/profile'>
                  <DropdownItem >
                    Profile
                  </DropdownItem>

                </Link>
                <Link to='/logout'>
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigationbar;