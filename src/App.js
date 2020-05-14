import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {API_WITH_KEY} from './constants'
import Button from './components/Button'

function App() {
const [image, setImage] = useState([])
const [info, setInfo] = useState(null)


const openInfo = e => {
  setInfo(e)
}

const closeInfo = () => {
  setInfo(null)
}
  // useEffect(() => {
  //   axios.get(`${API_WITH_KEY}`)
  //     .then(result => {
  //       setImage(result.data)
  //     })
  // },[])
 const Image = (props) => {
   return (
     <div className='image'>
       {/* {props.image.title}  */}
       <button onClick={() => openInfo(props.image)}>
         More Info
       </button>
     </div>
   )
 }
  return (
    <div className="App">
      <header>
        <h1>Nasa Picture of the day: image.date</h1>
      </header>
      {/* <img src={image.url} alt='nasa image of the day'/> */}
      <Image />
      {
        image && <Button currentimage={image} close={closeInfo}
      }
      <Button/>
      {/* <button onClick={() => openInfo{image.data}}>
        More Info
      </button> */}
    </div>
   
  );
}

export default App;
