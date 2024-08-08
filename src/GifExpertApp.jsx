import { useState } from "react";
import { AddCategories } from "./components/AddCategories";
import GifGrid from "./components/GifGrid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (newCategory) => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([newCategory, ...categories]);
    }
  };

  const handleClearCategories = () => {
    setCategories([]);
  };

  return (
    <>
      <h1>Generador de Gifs</h1>
      <AddCategories onNewCategory={handleAddCategory} />
      <div className="buttons">
        <button className="btn-add" onClick={() => handleAddCategory(document.querySelector('input').value)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Buscar
        </button>
        <button className="btn-clear" onClick={handleClearCategories}>
        <FontAwesomeIcon icon={faTrash} />Limpiar
        </button>
      </div>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
