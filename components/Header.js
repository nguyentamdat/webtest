import React from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';



const Header = () => {
    return (

        <div className="header-slider-wrap">
            <div className="top-header">
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="#home">
                            <img
                                alt={"logo"}
                                src="/images/logo.png"
                                width="40"
                                height="40"
                            />
                            {'Angel Hospital Management '}
                        </Navbar.Brand>
                    </Navbar>
            </div>
        </div>
    )
}

// <ul>
//                         <li className="iconadd">4-6 Truong Dinh, District 3, Ho Chi Minh City</li>
//                         <li className="iconnum"><a href="tel:+888 888 8888">028 3930 2846</a></li>
//                     </ul>

export default Header