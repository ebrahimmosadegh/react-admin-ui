import { GridColDef } from "@mui/x-data-grid";
import "./addUser.scss";
import React from "react";


type Props = {
    slug: string;
    columns:GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddUser = (props:Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // add new item
        // axios.post(`/api/${slug}s`, {})
    }
  return (
    <div className="addUser">
      <div className="modal">
        <span className="colse" onClick={()=>props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
            {props.columns
            .filter(item => item.field !== "id" && item.field !== "img")
            .map((column)=>(
            <div className="item">
                <label htmlFor="">{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
            </div>
            ))}
            <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser
