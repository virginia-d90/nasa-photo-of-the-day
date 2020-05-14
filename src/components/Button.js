import React, {useState} from 'react'
import '../App.css'
import axios from 'axios'
import {API_WITH_KEY} from '../constants'

const Button=(props)=>{
    const[details, setdetails] = useState(null)

    useEffect(() => {
        // axios.get(${API_WITH_KEY
        //     .then(result => {
        //         setdetails(result.data)
        //     })
        // })
    },[image])
    
    if (!details){
        return `No details for ${image}`
    }

    return(
        <div className="button-info">
            <h2>details.title</h2>
            <p>details.explanation</p>
        </div>
    )
}

export default Button