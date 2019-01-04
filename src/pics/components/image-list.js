import React from 'react';
import ImageCard from './image-card';
import './image-list.css';

const ImageList = ({ images }) => {
  console.log(images);

  const renderImageList = () => images.map(image => (
    <ImageCard
      key={image.id}
      description={image.description}
      src={image.urls.regular}
    />
  ));

  return (
    <div className="image-list">
      {renderImageList()}
    </div>
  )
}

export default ImageList;

