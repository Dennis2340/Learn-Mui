import React from 'react'
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid"
import getCitiesData from "../api/api"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import QuiltedImageList from "../Components/imageCollage"
import ControlledAccordions from "../Components/Accordion"

function Tour() {
  return (
    <div>
      <Container sx={{width: 900}}>
        <Typography variant="h3" component="h1" marginTop={3}>
          For the love of BasketBall
        </Typography>

        <Box marginTop={3} sx={{display: "flex"}}>
          <img width={500} height={450} src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" alt="ball" />
          <QuiltedImageList  marginLeft={2}/>
        </Box>

        <Box marginTop={3}>
        <Typography  variant= "h5" component="h3">
          About this ticket
        </Typography>

        <Typography marginTop={3}  variant= "body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repellendus quidem nesciunt adipisci illo eligendi aperiam fugiat quas consequuntur! In dolorum nam at voluptatibus magnam, esse animi recusandae vero incidunt!
        </Typography>
        </Box>

        <Typography marginTop={3} variant= "h5" component="h3">
          Frequently Asked Questions
        </Typography>

        <Box marginTop={3}>
          <ControlledAccordions/>
        </Box>


      </Container>

    </div>
  )
}

export default Tour