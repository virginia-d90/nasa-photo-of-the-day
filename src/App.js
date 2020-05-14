import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {API_WITH_KEY} from './constants'


function App() {
  const [image, setImage] = useState([])
  const [toggleInfo, setToggleInfo] = useState(false)

  const toggleInfoHandler = event => {
    event.preventDefault()
    setToggleInfo(!toggleInfo)
  }

    useEffect(() => {
      axios.get(`${API_WITH_KEY}`)
        .then(result => {
          setImage(result.data)
        })
    },[])
 
  return (
    <div className="App">
      <header>
        <h1>Nasa Picture of the day: {image.date}</h1>
      </header>
      <main>
        <img src={image.url} alt="nasa of the day" />
        <button onClick={e => {toggleInfoHandler(e)}}>
          {
            toggleInfo ? 'collapse':'expand'
          }
        </button>
        {
          toggleInfo && (
            <>
              <h2>{image.title}</h2>
              <p>{image.explanation}</p>
            </>
          )
        }
      </main>
      
     
    
    </div>
    
  );
}

export default App;
