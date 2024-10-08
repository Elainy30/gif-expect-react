import React from 'react';

const GifItem = ({ id, title, url }) => {
  return (
    <div key={id} className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GifItem;
