import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './AddStudent.css';
const AddStudent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
  const onSubmit = data => {
      axios.post("https://sheltered-crag-88066.herokuapp.com/addstudent",data)
      .then(res=>{
        navigate('/');
      })
  };
    return (
      <div className='shadow-lg form-container d-flex justify-content-center align-items-center mt-5'>
          <form  onSubmit={handleSubmit(onSubmit)}>
            <h2>Add A new Student</h2>
          <input placeholder='Enter Name' {...register("name", { required: true })} /> <br />
          {errors.name && <span>This field is required</span>}
          <input placeholder='Enter Department' {...register("dept", { required: true })} /> <br />
          {errors.dept && <span>This field is required</span>}
          <input className='submitBtn' type="submit" />
        </form>
      </div>
      );
};

export default AddStudent;