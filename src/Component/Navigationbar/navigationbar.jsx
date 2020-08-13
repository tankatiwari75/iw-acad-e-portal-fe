import React, { useState } from 'react';
// css file import
import "./navigationbar.css"

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
DropdownItem,
} from 'reactstrap';

const Navigationbar = (props) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
<div>
    <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">E-Portal</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#">Calendar</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Username
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Profile
                        </DropdownItem>
                        <DropdownItem>
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Collapse>
    </Navbar>
</div>
);
}

export default Navigationbar;