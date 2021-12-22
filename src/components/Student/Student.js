import React from 'react';
import { useNavigate } from "react-router-dom";
import './Student.css';
const Student = ({student}) => {
    let navigate = useNavigate();
    const handleClick=()=>{
        navigate(`/details/${student._id}`);
    }
    return (
        <div className='col-lg-3'>
            <div onClick={handleClick} className='shadow-lg bg-body rounded student-list'>
                <p>{student.name}</p>
                <p>{student.dept}</p>
            </div>
        </div>
    );
};

export default Student;