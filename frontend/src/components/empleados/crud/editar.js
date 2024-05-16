import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";

export default class EmpleadosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      empleado: {
        name: "",
        position: "",
        office: "",
        salary: "",
      },
    };
  }

  componentDidMount() {
    this.getEmpleado();
  }

  getEmpleado() {
    request
      .get(`/empleados/${this.props.idEmpleado}`)
      .then((response) => {
        this.setState({
          empleado: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  setValue(inicio, value) {
    this.setState({
      empleado: {
        ...this.state.empleado,
        [inicio]: value,
      },
    });
  }

  guardarEmpleados() {
    request
      .put(`/empleados/${this.props.idEmpleado}`, this.state.empleado)
      .then((response) => {
        if (response.data.exito) {
          alert("El empleado se actualizó correctamente");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <Container>
        <Row id="row-formulario">
          <Form id="formulario-crear-usuario">
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={this.state.empleado.name}
                onChange={(e) => this.setValue("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>position</Form.Label>
              <Form.Control
                value={this.state.empleado.position}
                onChange={(e) => this.setValue("position", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Office</Form.Label>
              <Form.Control
                value={this.state.empleado.office}
                onChange={(e) => this.setValue("office", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                value={this.state.empleado.salary}
                onChange={(e) => this.setValue("salary", e.target.value)}
              />
            </Form.Group>
            <Button
              id="boton-crear-usuario"
              onClick={() => this.guardarEmpleados()}
            >
              Save Edit User
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
