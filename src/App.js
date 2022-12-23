import React, {useEffect,useState} from "react"
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SearchAppBar from "./Components/AppBar"
import Tour from "./pages/Tour"
import Home from "./pages/Home"
function App() {
  
  // const [cityInfo,setCityInfo] = useState([])

  // useEffect(() =>{
  //   getCitiesData()
  //   .then((data) => {
  //     console.log(data)
  //     // setCityInfo(data)
  //   })
  // }, [])

  
    return (

      <BrowserRouter>
      <SearchAppBar/>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/:id" element={<Tour/>} />
        </Routes>
      </BrowserRouter>
    
    
    
    )
}

export default App;
