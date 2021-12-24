import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { PropagateLoader } from "react-spinners";
import "./Details.css";

const Details = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  let params = useParams();
  const [selectedOption, setSelectedOption] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://sheltered-crag-88066.herokuapp.com/students/${params.id}`)
      .then((res) => res.json())
      .then((data) => setStudentInfo(data));
  }, [params.id, loading]);

  useEffect(() => {
    fetch("https://sheltered-crag-88066.herokuapp.com/course")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, [loading]);

  const onSubmit = (data) => {
    axios
      .put(
        `https://sheltered-crag-88066.herokuapp.com/addcourse/${studentInfo[0]._id}`,
        { courses: selectedOption.value }
      )
      .then((res) => {
        setLoading(!loading);
      });
  };
  const allCourses = [];
  courses.forEach((course) => {
    if (!studentInfo[0]?.courses?.includes(course.name)) {
      allCourses.push({
        value: course.name,
        label: course.name,
      });
    }
  });
  return (
    <div>
      {studentInfo.length === 0 ? (
        <PropagateLoader color="blue" size={15} />
      ) : (
        <div className="row mt-5">
          <div className="col-lg-8">
          <h5>Department: <span className="deptName">{studentInfo[0]?.dept}</span> </h5>
          <h2>Selected courses for <span className="studentName mb-5">{studentInfo[0]?.name}</span> </h2>
          {studentInfo[0]?.courses?.map((a) => (
            <span className="courseName" key={a}>{a}</span>
          ))}
          </div>
          {allCourses.length && (
            <div className="col-lg-4 mt-5">
              <h2>Assign new Course</h2>
              <Select
                onChange={setSelectedOption}
                name="colors"
                options={allCourses}
                className="basic-multi-select w-50 m-auto"
                classNamePrefix="select"
              />
              <button className="submitBtn" onClick={onSubmit}>Add</button>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
