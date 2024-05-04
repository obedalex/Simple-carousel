// Import useState 
import { useState } from "react"

// An object containing images
const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

// Create useState to track changes of the current changes 
export default function App() {
  const [current, setCurrent] = useState(0);

  // Create a function called next slide, a nested function with an if statement to change the slide to the next 
  function nextSlide() {
    setCurrent(current === 0 ? images.length - 1 : current + 1);
  }

  // Create a function called next slide, a nested function with an if statement to change the slide to the previous 
  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }


  return (
    <div>
      <h2>Project 1: Carousel</h2>
      <div className="left-arrow" onClick={prevSlide}>
        ⬅
      </div>
      <div className="right-arrow" onClick={nextSlide}>
        ⮕
      </div>
      {images.map((image, index) => current === index && (
        <div key={image} className="slide">
          <img src={image} alt="images" />
        </div>
      )
      )}
    </div>
  );
}