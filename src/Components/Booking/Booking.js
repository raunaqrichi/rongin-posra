import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import '../Booking/Booking.css'
const Booking = () => {
    const {Id} = useParams();
    const [plan, setPlan] = useState({});
    const email = sessionStorage.getItem("email")
    

    useEffect(() =>{
        fetch(`https://stark-tundra-39535.herokuapp.com/SinglePlan/${Id}`)
        .then(res => res.json())
        .then(result => setPlan(result))
    },[])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        data.email = email;
        data.status = "Pending"

        fetch("https://stark-tundra-39535.herokuapp.com/confirmBooking", {
      method: "POST",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(result => console.log(result))

    console.log(data)
    }
    return (
        <div className='d-flex justify-content-center align-items-center'>
           
               
               <div className='cart'>
                            <div>
                            <img className='h-50 w-50' src={plan?.image} alt=''/>
                            </div>
                            <h1>{plan?.name}</h1>
        <p><strong>Description:</strong> {plan?.description}</p>
        
        <h4>Price: ${plan?.price}</h4> 
        

                        
                    
                
            
        
       
    
           </div>
            <div className='cart'>
           <form onSubmit={handleSubmit(onSubmit)}>
    
    <input  {...register("name")} placeholder='Tour Name' defaultValue={plan?.name} className='p-2 m-2 w-75'/>
  <br/>
    <input  {...register("description")} placeholder='' defaultValue={plan?.description} className='p-2 m-2 w-75'/>
  <br/>
    <input {...register("image", { required: true })} placeholder='Image Link' defaultValue={plan?.image} className='p-2 m-2 w-75'/>
   <br/>
    <input {...register("price", { required: true })} placeholder='Price' defaultValue={plan?.price} type='number' className='p-2 m-2 w-75'/>
    <br/>
    <input  {...register("userName")} placeholder='Your Name' className='p-2 m-2 w-75'/>
  <br/>
  <input  {...register("address")} placeholder='Your Address' className='p-2 m-2 w-75'/>
  <br/>
  <input  {...register("number")} placeholder='Your Phone Number' className='p-2 m-2 w-75'/>
  <br/>
  
  <input  {...register("date")} placeholder='Date' className='p-2 m-2 w-75'/>
  <br/>
   
   
    {errors.exampleRequired && <span>This field is required</span>}
    <br/>
    <input type="submit" value='Confirm'  className='p-2 m-2 btn btn-success' />
  </form>
           </div> 
        </div>
    );
};

export default Booking;