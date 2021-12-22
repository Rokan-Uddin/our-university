import React from 'react';

const Student = ({student}) => {
    return (
        <div className='col-lg-3'>
            <div className='shadow-lg bg-body rounded'>
                <p>{student.name}</p>
                <p>{student.dept}</p>
            </div>
        </div>
    );
};

export default Student;