import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { PropagateLoader } from "react-spinners";
import "./Details.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Details = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [studentInfo, setStudentInfo] = useState([]);
  let params = useParams();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  useEffect(() => {
    fetch(`https://sheltered-crag-88066.herokuapp.com/students/${params.id}`)
      .then((res) => res.json())
      .then((data) => setStudentInfo(data));
  }, [params.id]);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const onSubmit = (data) => {
    closeModal();
  };
  for (let a = 0; a < selectedOption.length; a++) {
    console.log(selectedOption[a].value);
  }
  return (
    <div>
      {studentInfo.length === 0 ? (
        <PropagateLoader color="blue" size={15} />
      ) : (
        <div>
          <h1>Name: {studentInfo[0]?.name} </h1>
          <p>Department: {studentInfo[0]?.dept} </p>

          {studentInfo[0]?.courses?.map((a) => (
            <h1>{a}</h1>
          ))}

          <Select
            onChange={setSelectedOption}
            isMulti
            name="colors"
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            className="basic-multi-select"
            classNamePrefix="select"
          />

          <button className="mt-5" onClick={openModal}>
            Add new Course
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Courses"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name", { required: true })} />
              {errors.name && <span>This field is required</span>}
              <input {...register("dept", { required: true })} />
              {errors.dept && <span>This field is required</span>}
              <input type="submit" />
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Details;
