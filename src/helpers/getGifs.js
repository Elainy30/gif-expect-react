export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Ul6NQF4tuX319p3OG5JpzCXt4uj4c8wX&q=${category}&limit=14`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
