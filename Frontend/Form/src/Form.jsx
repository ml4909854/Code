import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    gender: "",
    comments: ""
  });



  function handleChange(e) {
   // first we destruture name and value
   const {name , value} = e.target
   setFormData({...formData , [name]:value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
  }
  return (
    <>
      {/* create a form */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="name"
            onChange={handleChange}
          />
        </label>
        <br />
        {/* ----- */}
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="password"
            onChange={handleChange}
          />
        </label>
        <br />
        {/* ------- */}
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
       
        <label> comments:
            <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Form;
