import React, { useState } from "react";

function NewPlantForm({ baseUrl, onFormSubmit }) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 
console.log(nameInput, imageInput, priceInput)
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        "name": nameInput,
        "image": imageInput,
        "price": priceInput,
      })
    })
    .then((r) => r.json())
    .then((data) => onFormSubmit(data))
  }

  // function handleChange(e) {
  //   console.log(e.target.value)
  // }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form
      onSubmit = { handleSubmit }
      >
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        value = { nameInput }
        // onChange = { handleChange } 
        onChange = { (e)=> setNameInput(e.target.value) } 
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value = { imageInput } 
        // onChange = { handleChange } 
        onChange = { (e)=> setImageInput(e.target.value) } 
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value = { priceInput } 
        // onChange = { handleChange } 
        onChange = { (e)=> setPriceInput(parseInt(e.target.value))} 
        />
        <button 
        type="submit"
        >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
