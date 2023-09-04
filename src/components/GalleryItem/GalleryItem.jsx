import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function GalleryItem ({image}) {

  const {id, path, description} = image;
  const [showDescription, setShowDescription] = useState(false);
  const [likes, setLikes] = useState(image.likes);

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  const handleLike = () => {
    axios.put(`/gallery/like/${id}`)
    .then(() => {
      setLikes(likes + 1)
    })
    .catch((error) => {
      console.log(error);
      })
  }

  return(
    <>
      {showDescription ? (<p onClick={toggleDescription}>{description}</p>) : (<img src={path} alt={description} onClick={toggleDescription}/>) }
      <br></br>
      <Button color='success' variant='contained' type='submit'  onClick={handleLike}>Amazing!</Button>
      <p>People think this is amazing: {likes}</p>
    </>
  )
}

export default GalleryItem;