import React, { useState } from "react";

function ToyForm({handleSetAddToy}) {

  // const [name, setName] = useState("")
  // const [image, setImage] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    image: "",
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // *** ABSTRACTED ON LINE 25 ***
  // function handleNameChange(event){
  //   setName(event.target.value)
  // }
  function handleSubmit(event){
    event.preventDefault()

    const updatedToyObj = {
     ...formData,
     likes: 0,
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedToyObj)
    })
      .then(r => r.json())
      .then(handleSetAddToy)
  }
  


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

// When the ToyForm is submitted, make a POST request to /toys to save a new toy to the server. 
// Using the ideas of controlled form and inverse data flow, think about how to render a new ToyCard for the toy that you created.

// 1) onChange for 1 input (create state)
// 2) callback --> event.target.value
// 3) do rest of inputs
// 4) onSubmit
// 5) create object to fetch PATCH
// 7) update based on returned data
// 8) callback function prop from parent 
