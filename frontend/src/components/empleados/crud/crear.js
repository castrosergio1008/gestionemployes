import React from 'react';
import { Container, Row, Form, Button} from 'react-bootstrap';
import {request } from '../../helper/helper';


export default class Crear extends React.Component {
    state = { 
        empleado:{
            name: "",
            position: "",
            office: "",
            salary: "",
        },
     }

     setValue(inicio, value){
        this.setState({
            empleado: {
                ...this.state.empleado, 
                [inicio]: value,
            },
        });
    }

    guardarEmpleados(){
        request
        .post("/empleados", this.state.empleado)
        .then((response) => {
            if(response.data.exito){
                alert("El empleado se guardó correctamente")
        }
        })
        .catch((err)  => {
            console.error(err);
        });
    }

    render() { 
        return ( 
            <Container style={{ height: 400, width: '75%' }}>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("name", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Position</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("position", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Office</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("office", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control onChange={(e) => this.setValue("salary", e.target.value)}/>
                        </Form.Group>
                        <Button id="boton-crear-usuario" onClick={() => console.log(this.guardarEmpleados())}>
                            Save User
                        </Button>
                    </Form>
                </Row>
            </Container>
         );
    }
}
