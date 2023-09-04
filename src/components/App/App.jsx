import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// Styling
import './App.css';
// Components
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  useEffect(() => {
    fetchImage()
  }, []);

  const [imageList, setImageList] = useState([]);
  const fetchImage = () => {
    axios.get('/gallery')
    .then((response) => {
        console.log(response.data);
        setImageList(response.data)
    })
    .catch((error) => {
    console.log(error);
    })
};
// console.log(imageList);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Brie's Life</h1>
        </header>
        <p className='heading'>Click on photos to get description and vice versa. Please lmk which photos & facts you think are amazing!</p>
        <GalleryList image={imageList}/>
      </div>
    );
}
export default App;





















