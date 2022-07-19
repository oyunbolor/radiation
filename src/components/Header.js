import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Nav, TabContainer } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" variant="">
                <Container>
                    <img src={"irimhe_logo.png"} className="logo" alt="logo" />
                    <Navbar.Brand>Цацрагийн мэдээллийн сан</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className="header_nav" href="/">Цацрагийн тунгийн чадлын мэдээ</Nav.Link>
                            <Nav.Link className="header_nav" href="#deets">Газарзүйн мэдээлэл</Nav.Link>
                            <Nav.Link className="header_nav" href="#deets">Статистик тайлан</Nav.Link>
                            <Nav.Link className="header_nav" href="/login">Мэдээ оруулах</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}