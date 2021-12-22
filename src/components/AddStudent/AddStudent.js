import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddStudent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
      axios.post("https://sheltered-crag-88066.herokuapp.com/addstudent",data)
      .then(res=>{
      })
  };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input  {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
          <input {...register("dept", { required: true })} />
          {errors.dept && <span>This field is required</span>}
          <input type="submit" />
        </form>
      );
};

export default AddStudent;