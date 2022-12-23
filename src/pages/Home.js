
import TourCard from '../Components/TourCard';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid"
import getCitiesData from "../api/api"
import Typography from "@mui/material/Typography"

const Home = () => {
  return (
  <div className="App">
  
      <Container sx={{marginY: 5}}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
            <Typography marginTop={3} variant="h4" component="h2">
                FIRST HEADING
            </Typography>
            </Grid>
          <TourCard/>
          <TourCard/>
          <TourCard/>
           <TourCard/>
           <Grid item xs={12}>
            <Typography marginTop={3} variant="h4" component="h2">
              SECOND HEADING
            </Typography>
            </Grid>
           
            <TourCard/>
          <TourCard/>
          <TourCard/>
           <TourCard/>
          </Grid>
      </Container>
  </div>
  )
}

export default Home