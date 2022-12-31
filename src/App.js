import React from "react"
import './App.css';
import SideBar from "./MainComonents/SideBar";
import Feed from "./MainComonents/Feed";
import RightBar from "./MainComonents/RightBar";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import NavBar from "./MainComonents/NavBar";
function App() {
 
    return (


      <Box>
        <NavBar/>
        <Stack direction="row" spacing={2} justifyContent="space-between"> 
          <SideBar/>
          <Feed/>
          <RightBar/>
        </Stack>
      </Box>

      // <BrowserRouter>
      // <SearchAppBar xs={12} md ={12} xl={12}/>
      //   <Routes>
      //     {/* <Route path="/" element ={<Home/>} /> */}
      //     <Route path="/" element={<Tour/>} />
      //   </Routes>
      // </BrowserRouter>
    
    
    
    )
}

export default App;
