import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(data => setToys(data))
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  function handleSetAddToy(newToy){
    setToys([...toys, newToy])
  }

  function handleDeleteToy(toyToDelete) {
    const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSetAddToy={handleSetAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} onDeleteToy={handleDeleteToy}/>
    </>
  );
}

export default App;

// 1)  make a GET request to /toys to fetch the toy array. 
// -state (useState & useEffect)
// 2) useEffect -> fetch -> setState
// 3) passed toys to toyContainer as prop and mapped over to provided upDatedToys and props for card to render

