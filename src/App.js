import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
const [Image, setImage] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=b6bYFSdHYq3gtt399B0oj8EESrBmZYZMEjakSQib`)
      .then(result => {
        setImage(result.data)
      })
  })
  console.log()
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
