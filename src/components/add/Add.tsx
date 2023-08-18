import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type props = {
  slug: string;
  columns: GridColDef[];
  state: boolean;
};
function Add(props) {
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log('form Submiited')
    }
  return (
    <div className='add'>
      <div className='modal'>
        <span className='close' onClick={()=> props.state(false)}>X</span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className='item'>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
            <button >Create {(props.slug)}</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
