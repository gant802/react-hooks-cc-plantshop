import React, {useState} from "react";

function NewPlantForm({onSubmit}) {

  //? Setting initial formData state
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  //? Updating formData state as user types
  function handleFormChange(e){
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  //? Passes new plant up to parent on form submit
function handleSubmit(e){
  e.preventDefault()
  onSubmit(formData)
  setFormData({
    name: "",
    image: "",
    price: ""
  })
}


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFormChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleFormChange} value={formData.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleFormChange} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
