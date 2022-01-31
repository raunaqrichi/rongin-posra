import React from 'react';
import { useForm } from "react-hook-form";


const AddAProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
      fetch("https://stark-tundra-39535.herokuapp.com/AddANewPlan", {
      method: "POST",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(result => console.log(result))

    console.log(data);
    }

    
    
   
    return (
        <div>
            <h1 className='title'>Add More Plans</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input  {...register("name")} placeholder='Name' className='p-2 m-2 w-75'/>
    <br/>
      <input  {...register("description")} placeholder='Description' className='p-2 m-2 w-75'/>
    <br/>
      <input {...register("image", { required: true })} placeholder='Image Link' className='p-2 m-2 w-75'/>
     <br/>
      <input {...register("price", { required: true })} placeholder='Price' type='number' className='p-2 m-2 w-75'/>
     
     
      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input type="submit" value='Add' className='p-2 m-2 btn btn-secondary' />
    </form>
        </div>
    );
};

export default AddAProduct;