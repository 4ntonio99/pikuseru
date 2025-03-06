import { useState, useEffect } from "react";
import Image from 'next/image';

import "./heroCarousel.css";

const images = [
  "/fBanner.png",
  "/sBanner.png",
  "/tBanner.png",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel">
      <div className="image-container">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            className={`carousel-image ${index === currentIndex ? "active" : ""}`}
            alt={`Slide ${index}`}
            height={500} width={1000}
          />
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
