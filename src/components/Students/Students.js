import React, { useEffect, useState } from 'react';

const Students = () => {
    const [students,setStudents]=useState([]);
    useEffect(()=>{
        fetch("https://sheltered-crag-88066.herokuapp.com/students")
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[])
    
    return (
        <div>
            {
                <h1>{students.length}</h1>
            }
        </div>
    );
};

export default Students;