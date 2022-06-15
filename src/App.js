import * as React from 'react';
import 'bootstrap/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Figure from 'react-bootstrap/Figure';
import logo from './logo.svg';
import './App.css';
import { Nav, TabContainer } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
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
            <Nav.Link className="header_nav" href="App.js">Цацрагийн тунгийн чадлын мэдээ</Nav.Link>
            <Nav.Link className="header_nav" href="#deets">Газарзүйн мэдээлэл</Nav.Link>
            <Nav.Link className="header_nav" href="#deets">Статистик тайлан</Nav.Link>
            <Nav.Link className="header_nav" href="#deets">Мэдээ оруулах</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Гадаад орчны цацрагийн түвшний мэдээллийн сан
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <Table striped bordered hover size="md">
        <thead>
          <tr>
            <th>№</th>
            {Array.from({ length: 8 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
      <div className="footer">
        <div className="container-fluid text-md-left">
          <div className="row">
              <div className="col-md-6 mt-md-0 mt-2">
                  <h5 className="text-sitename">Цацрагийн мэдээллийн сан</h5>
                  <p>Here you can use rows and columns to organize your footer content.</p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-0"/>

              <div className="col-md-4 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Холбоос хаяг</h5>
                  <ul className="list-unstyled">
                  <div className="row">
                  <Figure>
                    <Figure.Image
                      width={80}
                      height={80}
                      alt="Байгаль орчин, аялал жуулчлалын яам"
                      src="./logo2.png"
                    />
                  </Figure>
                      <li><a className="link" href="#!">Байгаль орчин, аялал жуулчлалын яам.</a></li>
                      </div>
                  </ul>
                  <ul className="list-unstyled">
                  <Figure>
                    <Figure.Image
                      width={80}
                      height={80}
                      alt="Байгаль орчин, аялал жуулчлалын яам"
                      src="./irimhe_logo.png"
                    />
                  </Figure>
                      <li><a className="link" href="#!">Ус цаг уур, орчны судалгаа, мэдээллийн хүрээлэн.</a></li>
                  </ul>
              </div>

              <div className="col-md-2 mb-md-1 mb-3">
                  <h5 className="text-uppercase">Холбоо барих</h5>
                  <ul className="list-unstyled">
                      <li><a className="link" href="#!">Жуулчны гудамж-5, Бага тойруу-3, Улаанбаатар 15160</a></li>
                      <li><a className="link" href="#!">+976-11-327982</a></li>
                      <li><a className="link" href="#!">support@eic.mn</a></li>
                  </ul>
              </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2022 Copyright:
          <a href="https://eic.mn/"> eic.mn</a>
        </div>
      </div>
    </div>
  );
}

export default App;
