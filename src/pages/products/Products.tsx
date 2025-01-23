import { useState } from 'react';
import './products.scss';
import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';

const Products = () => {
  const[open,setOpen] = useState(false)
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={userRows}/>
      {open && <Add slug='user' columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products
