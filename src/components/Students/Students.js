import React, { useEffect, useState } from 'react';
import Student from '../Student/Student';

const Students = () => {
    const [students,setStudents]=useState([]);
    useEffect(()=>{
        fetch("https://sheltered-crag-88066.herokuapp.com/students")
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[])
    
    return (
        <div className='container'>
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