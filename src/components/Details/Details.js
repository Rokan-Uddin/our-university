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
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    fetch(`https://sheltered-crag-88066.herokuapp.com/students/${params.id}`)
      .then((res) => res.json())
      .then((data) => setStudentInfo(data));
  }, [params.id,loading]);
  
  useEffect(()=>{
    fetch("https://sheltered-crag-88066.herokuapp.com/course")
    .then(res=>res.json())
    .then(data=>{
      setCourses(data)
    });
},[loading])

  const onSubmit = (data) => {
    axios.put(`https://sheltered-crag-88066.herokuapp.com/addcourse/${studentInfo[0]._id}`,{courses:selectedOption.value})
    .then(res=>{
        setLoading(!loading);
    })
  };

  var allCourses=[];
  courses.forEach(course=>{
    if(!studentInfo[0]?.courses?.includes(course.name)) {
      allCourses.push({
        value:course.name,
        label:course.name
      })
    }
  })
  return (
    <div>
      {studentInfo.length === 0 ? (
        <PropagateLoader color="blue" size={15} />
      ) : (
        <div>
          <h1>Name: {studentInfo[0]?.name} </h1>
          <p>Department: {studentInfo[0]?.dept} </p>

          {studentInfo[0]?.courses?.map((a) => (
            
            <h1 key={a}>{a}</h1>
          ))}
            {
              allCourses.length &&   <div>
                <Select
              onChange={setSelectedOption}
              name="colors"
              options={allCourses}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            <button onClick={onSubmit}>Add</button>
              </div>
            }

        </div>
      )}
    </div>
  );
};

export default Details;
