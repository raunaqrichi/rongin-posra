import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';



const MyOrders = () => {
    const email = sessionStorage.getItem("email");
    const [order, setOrder] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://stark-tundra-39535.herokuapp.com/myPlans/${email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[control])

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
        <div className='container my-3'>
            <h1 className='title'>My Plans</h1>
              <div className='row'> 
                 { order?.map((product) =>(
                    <div className='col-md-4'>
                        <div  className='order'>
                            <div>
                            <img className='h-50 w-75 m-3' src={product?.image} alt=''/>
                            </div>
                            <h3>{product?.name}</h3>
                            <p><strong>Email:</strong> {product?.email}</p>
        
        <p><strong>Name:</strong> {product?.userName}</p>
        <p><strong>Address:</strong> {product?.address}</p>
        <p><strong>Phone no:</strong> {product?.number}</p>
        <p><strong>Description:</strong> {product?.description}</p>
        <p><strong>Date:</strong> {product?.date}</p>
        <h4>Price: ${product?.price}</h4> 
        <h4>Status: {product?.status}</h4> 
        <Button onClick={()=>handleDelete(product?._id)} className='btn btn-danger'>Cancel</Button>

                        </div>
                    </div>
                 ))}
            </div>  
        </div>
    );
};

export default MyOrders;