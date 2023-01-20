import React, { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Row from './components/Row'
import "./HomeScreen.css"
import request from "../request"

function HomeScreen() {
 
  return (
    <div>
        {/* navbar */}
        <Navbar/>
        <Banner/>
        <Row fetch_url = "lmao" title ={request.fetchTrending}/>
        <Row fetch_url = "lmao" title ={request.fetchNetflixOriginals}/>
        <Row fetch_url = "lmao" title ={request.fetchTopRated}/>
        <Row fetch_url = "lmao" title ={request.fetchActionMovies}/>
        <Row fetch_url = "lmao" title ={request.fetchComedyMovies}/>
        <Row fetch_url = "lmao" title ={request.fetchHorrorMovies}/>
        <Row fetch_url = "lmao" title ={request.fetchRomanceMovies}/>
        <Row fetch_url = "lmao" title ={request.fetchDocumentaries}/>
    


    </div>
  )
}

export default HomeScreen