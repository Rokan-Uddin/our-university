import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

const Details = () => {
    const [studentInfo,setStudentInfo]=useState([]);
    let params = useParams();
    useEffect(()=>{
        fetch(`https://sheltered-crag-88066.herokuapp.com/students/${params.id}`)
        .then(res=>res.json())
        .then(data=>setStudentInfo(data));
    },[params.id]);
    
    return (
        <div>
            {
                studentInfo.length===0 ? <PropagateLoader color='blue' size={15} />
                : 
                <div>
                <h1>Name: {studentInfo[0]?.name} </h1>
                <p>Department: {studentInfo[0]?.dept} </p>
                
                    {
                        studentInfo[0]?.courses?.map(a=><h1>{a}</h1>)
                    }
                
                </div>
            }
        </div>
    );
};

export default Details;