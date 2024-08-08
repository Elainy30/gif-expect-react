import React from "react";
import { useFetchGifs } from "../hooks";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? (
        <p className="loading">Cargando...</p>
      ) : (
        <div className="card-grid">
          {images.map((img) => (
            <GifItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
