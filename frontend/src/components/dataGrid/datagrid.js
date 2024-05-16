import React from "react";
import { request } from "../helper/helper";
import { DataGrid } from "@mui/x-data-grid";
import { isUndefined } from "util";

export default class datag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    }; // Inicializamos rows como un array vacío
  }

  
  componentDidMount() {
    this.getData();
  }
  
  getData() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.error("Se produjo un error al obtener los datos:", error);
      });
  }
  existsColumn(colText) {
    let col = this.props.columns.find((column) => column.text === colText);
    return !isUndefined(col);
  }

  render() {
    const { rows } = this.state;
    return (
      <div style={{ height: 400, width: "50%" }} className="mx-auto">
        <DataGrid
          rows={rows}
          columns={this.props.columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          getRowId={(row) => row._id}
        />
      </div>
    );
  }
}
