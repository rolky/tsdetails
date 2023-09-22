"use client";
import { useState } from "react";
import { SelectInput, TextInput } from "./FormInputs";
import FormButtons from "./Formbuttons";

const NewStudentForm = () => {
  const [formData, setFormData] = useState({
    national_id_number: "",
    firstname: "",
    lastname: "",
    date_of_birth: "",
    student_number: "",   
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 w-full ">
        <div className="space-y-4">
          <TextInput
            label="National ID Number"
            type="text"
            placeholder="National ID Number"
            name="national_id_numebr"
            id="national_id_numebr"
            value={formData.national_id_number}
            onChange={(event) => {
              setFormData({
                ...formData,
                national_id_number: event.target.value,
              });
            }}
            required
          />
          
          <TextInput
            label="First Name"
            type="text"
            placeholder="First Name"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={(event) => {
              setFormData({
                ...formData,
                firstname: event.target.value,
              });
            }}
            required
          />
          <TextInput
            label="Last Name"
            type="text"
            placeholder="Last Name"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={(event) => {
              setFormData({
                ...formData,
                lastname: event.target.value,
              });
            }}
            required
          />
          <TextInput
            label="Date of Birth"
            type="date"
            placeholder="Date of Birth"
            name="date_of_birth"
            id="date_of_birth"
            value={formData.date_of_birth}
            onChange={(event) => {
              setFormData({
                ...formData,
                date_of_birth: event.target.value,
              });
            }}
            required
            min="2001-01-01"
            max={new Date().toISOString().split('T')[0]}
          />
          <TextInput
            label="Student Number"
            type="text"
            placeholder="Student Number"
            name="student_number"
            id="student_number"
            value={formData.student_number}
            onChange={(event) => {
              setFormData({
                ...formData,
                student_number: event.target.value,
              });
            }}
            required
          />
          
        </div>

        <div className="space-y-4"></div>

        <div className="space-y-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 py-6 w-full ">
        <div className="col-start-1 w-ful  flex justify-end">
          <FormButtons cancelTo="/students" />
        </div>
      </div>
    </form>
  );
};

export default NewStudentForm;
