import React from 'react'
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import '../App.css';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import { AccessTime } from "@mui/icons-material"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  components: {
   MuiTypography: {
    variants: [
      {
        props: {
          variant: "body"
        },
        style: {
          fontSize: 11
        }
      },
       {
        props: {
          variant: "body3"
        },
        style: {
          fontSize: 9
        }
      }
    ]
   }
  }
})

function TourCard() {
  return (
    <Grid item xs ={12} sm={3} xl={3}>
      
        <Card  elevation={3}>
          <img className="img-elem" src="debbeMainEdit.jpg" alt="debbieSmiling"/>
          <Box paddingX={1}>
             <Typography variant="subtitle1" component="h4">
                Debbie's smiling
              </Typography>
              <Box
           sx={{
            display:"flex",
            alignItems: "center"
           }}
          >
            <AccessTime sx={{width: 12.5}}/>
            <Typography  paddingX={0.5} variant="body2" component="p">
              5 hours
            </Typography>
          </Box>
          <Box
          sx ={{
            display: "flex"
          }}
          >     
             <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
             <Typography paddingX={1}  variant="body3" component="p">
               4.5  <span className = "review-span">(147 reviews)</span>
             </Typography>
            
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginTop={0}>
              From C $147
            </Typography>
          </Box>
          </Box>
         
        </Card>
       
    </Grid>
     
    
  )
}

export default TourCard