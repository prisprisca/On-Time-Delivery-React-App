import React from "react";
import "../style/Gallery.css"

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-images">
        <img
          src="https://image3.jdomni.in/banner/09/1F/C2/C3B825DEF23C94FDC3B9FE3BD1_1506521873319.jpg?output-format=webp"
          alt="sign"
        />
        <img
          src="https://image3.jdomni.in/banner/22102020/9C/AA/69/5BC6E8622494A0198DE33DD415_1603373217735.png?output-format=webp"
          alt="signature"
        />
        <img
          src="https://image2.jdomni.in/banner/A2/B3/54/A51BBC2C3EF0626775CF609091_1506521890235.jpg?output-format=webp"
          alt="signin"
        />
      </div>
    </div>
  );
}

export default Gallery;
