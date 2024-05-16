import React from "react";
import Crear from "./crud/crear";
import Editar from "./crud/editar";
import { GridActionsCellItem} from "@mui/x-data-grid";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Datag from "../dataGrid/datagrid";
import {request} from "../helper/helper";
import Add from '@mui/icons-material/Add';
import {Button} from 'react-bootstrap';



export default class inicioEmpleados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
      idEmpleado: "",
      columns: [
        {
          field: "_id",
          headerName: "ID",
          hidden: true,
        },
        {
          field: "name",
          headerName: "Name",
          with: 500,
        },
        {
          field: "position",
          headerName: "Position",
          with: 500,
        },
        {
          field: "office",
          headerName: "Office",
          with: 500,
        },
        {
          field: "salary",
          headerName: "Salary",
          with: 500,
        },
        {
          field: "actions",
          type: "actions",
          headerName: "Actions",
          width: 100,
          cellClassName: "actions",
          getActions: ({ id }) => {
            return [
              <GridActionsCellItem
                icon={<Edit />}
                label="Edit"
                className="textPrimary"
                onClick = {() => this.handleEdit(id)}
                color="inherit"
              />,
              <GridActionsCellItem
                icon={<Delete />}
                label="Delete"
                color="inherit"
                onClick = {() => this.handleDelete(id)}
              />,
            ];
          },
        },
      ]
    }; // Inicializamos rows como un array vacío
    
  }
  
  handleClick = () => {
    this.setState({currentTab: "crear"})
  }

  handleEdit = (id) => {
    this.setState({idEmpleado: id}, () => {
    this.setState({currentTab: "editar"})
  });
  }

  handleDelete = (id) => {
    this.setState({idEmpleado: id}, () => {
      request
      .delete(`/empleados/${this.state.idEmpleado}`)
      .then((response) => {
          alert("el empleado se eliminó correctamente")
          if(response.data.exito) this.reloadPage();
    })
      .catch((err) => {
          console.error(err);
      });
  }

  );
}

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        {<Add onClick={this.handleClick}/>}
        Añadir empleado
        {this.state.currentTab === "buscar" ? (
          <Datag
          url="/empleados"
          columns={this.state.columns}
          showEditButton={true}
          showDeleteButton={true}
            changeTab={this.changeTab}
            setIdEmpleado={this.setIdEmpleado}
          />
        ) : this.state.currentTab === "crear" ? (
          <Crear changeTab={this.changeTab} />
        ) :(
          <Editar
            idEmpleado = {this.state.idEmpleado}
            changeTab={this.changeTab}
            getIdEmpleado={this.getIdEmpleado}
          />
        )}
      </div>
    );
  }
}
