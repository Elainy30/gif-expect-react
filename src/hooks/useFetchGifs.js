
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGifs = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };

    fetchGifs();
  }, [category]);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
