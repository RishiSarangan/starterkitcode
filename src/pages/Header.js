import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

export default function Header(){
    return(
        <>
            <Navbar collapseOnSelect expand="lg" className='navbar' fixed="top">
                <Navbar.Brand className='brand'  href="/portfolio">Sustainability Starter Kit</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='navlist'>
                        <LinkContainer to="home">
                            <Nav.Link className='navitems'>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="about">
                            <Nav.Link className='navitems'>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="services">
                            <Nav.Link className='navitems'>Services</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="contact">
                            <Nav.Link className='navitems'>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Outlet />
        </>
    );
}