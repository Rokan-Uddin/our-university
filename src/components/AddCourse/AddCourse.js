import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './AddCourse.css';
const AddCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://sheltered-crag-88066.herokuapp.com/course", data)
      .then((res) => {
        setLoading(!loading);
        reset();
      });
  };
  useEffect(() => {
    fetch("https://sheltered-crag-88066.herokuapp.com/course")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [loading]);
  return (
    <div className="row">
      <div className="col-lg-9 courseContainer">
          <h1>Available Courses </h1>
        {courses.map((course) => (
          <h5 className="courseName">{course.name}</h5>
        ))}
      </div>

      <form className="col-lg-3 d-flex justify-content-center align-items-center mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
              <h2>Add a new Course</h2>
          <input placeholder="Course Name" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <input className="submitBtn" type="submit" />
          </div>
      </form>
    </div>
  );
};

export default AddCourse;
