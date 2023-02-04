import React, { useEffect, useState } from 'react'

import './App.css';
import Gallery from 'react-easy-image-gallery';

const imgs = [
  "12032.jpg",
  "1383.jpg",
  "14311.jpg",
  "14693.jpg",
  "14878.jpg",
  "16043.jpg",
  "1688.jpg",
  "17877.jpg",
  "19910.jpg",
  "2036.jpg",
  "20578.jpg",
  "21179.jpg",
  "21380.jpg",
  "21889.jpg",
  "22874.jpg",
  "22893.jpg",
  "25028.jpg",
  "26074.jpg",
  "26987.jpg",
  "27783.jpg",
  "28207.jpg",
  "28366.jpg",
  "29163.jpg",
  "29490.jpg",
  "29590.jpg",
  "29895.jpg",
  "29922.jpg",
  "30350.jpg",
  "30778.jpg",
  "31174.jpg",
  "31580.jpg",
  "331.jpg",
  "3875.jpg",
  "4908.jpg",
  "577.jpg",
  "6145.jpg",
  "6686.jpg",
  "9190.jpg",

  "1017a14e-e9f1-4f06-bf13-876f2df3a179.jpg",
  "195f8a25-cef0-48b1-9853-0f7159a0d7a7.jpg",
  "20cc1c59-bc56-4258-bf3b-a0bf5c33bfbd.jpg",
  "24ca7017-c7db-4c49-9148-0f2bd4037902.jpg",
  "288ab7f9-268f-4587-aeb5-560dbcd38064.jpg",
  "2a545806-54ff-4ba5-9074-da874398069f.jpg",
  "2abc534f-a711-43ec-b108-2526e457a8e6.jpg",
  "2b180e1e-3c62-4498-85ea-1fdf9c4ba084.jpg",
  "3dc3f739-5f7b-4a17-93f0-7ecf8b55abc6.jpg",
];

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const loadedImages = []
        for (const fileName of imgs) {
          const response = await import(`./images/500/${fileName}`) // change relative path to suit your needs
          //const response = await images(`./${fileName}`) // change relative path to suit your needs
          loadedImages.push({ src: response.default, width: 500, height: 500, alt: `${fileName}` });
        }
        console.log(loadedImages)
        setImages(loadedImages)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [images])

  if (error) return <>Error: {JSON.stringify(error, null, 4)}</>
  if (loading) return <>Loading</>

  return (
    <div className="App">
      <header className="App-header">
        <Gallery images={images}
        />
      </header>
    </div>
  );
}
//imgs.map((img) => ({ src: loadImage(img), width: 400, height: 400 }))}

export default App;
