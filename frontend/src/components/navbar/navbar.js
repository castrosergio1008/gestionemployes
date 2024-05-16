import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from '../../images/logodigital.jpeg';

export default class BarraNav extends React.Component {
  render() {
    return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle"
            />{" "}
            Gestión de Empleados
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
