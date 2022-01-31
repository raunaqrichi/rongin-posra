
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    const [status, setStatus] = useState("");

    const handleStatus = (e) =>{
      setStatus( e.target.value);
    }

    useEffect(() => {
        fetch("https://stark-tundra-39535.herokuapp.com/managePlans")
        .then(res => res.json())
        .then(data => setOrders(data))
    },[control])

    const handleUpdate = (id) =>{
      fetch(`https://stark-tundra-39535.herokuapp.com/updateStatus/${id}`, {
        method: "PUT",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({status})
      })
      console.log(id)
    }
    
    const handleDelete = (id)=>{
      const proceed = window.confirm("Are you sure, you want to delete?");
      if(proceed){
       fetch(`https://stark-tundra-39535.herokuapp.com/deteteOrders/${id}`, {
           method: 'DELETE'
       })
       .then(res => res.json())
       .then(data =>{
           if(data.deletedCount>0){
               alert("Deleted Successfully")
               setControl(!control)
           }
       })
      }
    }
    return (
        <div>
            <div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Service Title</th>
        {/* <th>Image Link</th> */}
        <th>Price</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone no</th>
        <th>Date</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
   {orders?.map((pd,index) => (
        <tbody>
        <tr>
          <td>{index}</td>
          <td>{pd?.name}</td>
          {/* <td>{pd?.image}</td> */}
          <td>${pd?.price}</td>
          <td>{pd?.userName}</td>
          <td>{pd?.email}</td>
          <td>{pd?.address}</td>
          <td>{pd?.number}</td>
          <td>{pd?.date}</td>
          <td> 
            <input onChange={handleStatus} type='text' defaultValue={pd?.status}/>
          </td>
          <Button onClick={()=>handleUpdate(pd?._id)} variant='secondary' className='text-dark m-1'>Update</Button>
          <Button onClick={()=>handleDelete(pd?._id)} variant='secondary' className='text-dark m-1'>Delete</Button>
        </tr>
      </tbody>
   ))}
  </Table>
</div>
        </div>
    );
};

export default ManageAllOrders;