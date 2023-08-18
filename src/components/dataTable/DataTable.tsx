import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

type props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const handleDelete =(id:number)=>{
    //delete row using filter method
    console.log(id + 'deleted')
}
const DataTable = (props) => {
  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <div className='action'>
          <Link to={`/${props.slug}/${params.row.id}`} >
            <img src='./view.svg' alt='' />
          </Link>
          <div className='delete'>
            <img src='./delete.svg' alt='' onClick={()=>handleDelete(params.row.id)}/>
          </div>
        </div>
      );
    },
  };
  return (
    <div className='datatable'>
      <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 100 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
