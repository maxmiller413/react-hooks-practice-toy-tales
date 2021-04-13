import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onLikeUpdateToy }) {
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onDeleteToy={onDeleteToy}
      onLikeUpdateToy={onLikeUpdateToy}
      
    />
  ));

  return <div id="toy-collection">{toyCards}</div>;
}

export default ToyContainer;
