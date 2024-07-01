"use client";

import React, { useState } from "react";
import ImageShow from "./components/ImageShow";

const imageBank = [
  "https://i1.sndcdn.com/artworks-000125156640-d1zs46-t500x500.jpg",
  "https://g.foolcdn.com/editorial/images/781903/shiba-inu-dog-doge-dogecoin.jpeg",
  "https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2021/12/25/827301-1662948649.jpg?itok=7Aa_jgcl",
  "https://i.ebayimg.com/images/g/XkUAAOSw0zdirXAf/s-l1200.webp",
  "https://dailyhodl.com/wp-content/uploads/2024/05/Dogecoin-Mirroring-Price-Action.jpg",
  "https://img.freepik.com/premium-photo/doge-meme-funny-portrait-face-dog-closeup-classic-art-design-generative-ai_839051-758.jpg",
  "https://assets.staticimg.com/cms/media/8xQAXc3kWmC2YkNVRcdPhLkLIQqcz8zE670UrYBop.jpg",
  "https://i.redd.it/blgt805rrbu61.png",
  "https://pbs.twimg.com/profile_images/1510429522637717504/woY1dquT_400x400.jpg",
  "https://i.pinimg.com/736x/71/2d/6b/712d6bbe3972b8e560d39cd3d9c26aed.jpg",
  "https://ae01.alicdn.com/kf/Sc2c4072b2db742e3be0400d00d9c9373h.jpg_640x640Q90.jpg_.webp",
  "https://c4.wallpaperflare.com/wallpaper/595/886/534/dog-doge-memes-microsoft-windows-wallpaper-thumb.jpg",
  "https://i.pinimg.com/564x/4b/74/cf/4b74cfb5f9ba362728b5ebfa6920b0f5.jpg",
  "https://ih1.redbubble.net/image.2349956374.0508/fposter,small,wall_texture,square_product,600x600.u1.jpg",
  "https://www.exodus.com/img/news/content/2022/11/60fbf14124a501bfda0c5.png",
  "https://cdn.dimsumdaily.hk/wp-content/uploads/2023/08/20121454/64e169c1e4b072ff81e35795-1.jpg",
];

const App = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);

  function handleClick() {
    if (count === imageBank.length) return;
    setImages((prev) => [
      ...prev,
      { src: imageBank[count], style: { fontSize: "16px" } },
    ]);
    setCount((prev) => prev + 1);
  }

  function handleStyles(src) {
    const index = images.findIndex((image) => image.src === src);
    setImages((prev) => {
      const newImages = [...prev];
      newImages[index] = {
        ...newImages[index],
        style: {
          ...newImages[index].style,
          fontSize: `${parseInt(newImages[index].style.fontSize) + 5}px`,
        },
      };
      return newImages;
    });
  }

  return (
    <>
      <button onClick={handleClick}>Get me a new image</button>
      <div>
        {images.map((image) => (
          <ImageShow
            key={crypto.randomUUID()}
            src={image.src}
            style={image.style}
            handleStyles={handleStyles}
          />
        ))}
      </div>
    </>
  );
};

export default App;
