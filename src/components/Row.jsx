import React, { useState } from 'react'
import "./Row.css"
import axios from "../axios"

function Row({title , fetch_url}) {
    const [movie  , setmmovie] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/orignal"
    
    useEffect(() => {
      async function fetchdata(){
        const request = await axios.get(fetch_url)
        setmmovie(request.data.results)
        return request;

      }
    

    }, [])
    


  return (
    <div className ="Row">
       <h2>{title}</h2>
        </div>
  )
}

export default Row