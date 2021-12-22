import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import Student from '../Student/Student';

const Students = () => {
    const [students,setStudents]=useState([]);
    useEffect(()=>{
        fetch("https://sheltered-crag-88066.herokuapp.com/students")
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[])
    
    return (
        <div className='container mt-5'>
            {
                students.length===0 && <PropagateLoader color='blue' size={15} />
            }
            <div className='row g-4'>
                {
                    students.map(student=><Student
                    key={student._id}
                    student={student}
                    ></Student>)
                }
            </div>
        </div>
    );
};

export default Students;