import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
const AddCourse = () => {
    const [courses,setCourses]=useState([]);
    const [loading,setLoading]=useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
      axios.post("https://sheltered-crag-88066.herokuapp.com/course",data)
      .then(res=>{
          setLoading(!loading);
      })
  };
  useEffect(()=>{
      fetch("https://sheltered-crag-88066.herokuapp.com/course")
      .then(res=>res.json())
      .then(data=>setCourses(data));
  },[loading])
    return (
        <div className='row'>
            <div className='col-lg-9'>
                {
                    courses.map(course=><h1>{course.name}</h1>)
                }
            </div>

            <form className='col-lg-3' onSubmit={handleSubmit(onSubmit)}>
          <input  {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
          <input type="submit" />
        </form>
        </div>
      );
};

export default AddCourse;