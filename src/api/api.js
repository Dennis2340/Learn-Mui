import axios from "axios";

const URL ="https://countries-cities.p.rapidapi.com/location/city/5128580"



const options = {
  headers: {
    'X-RapidAPI-Key': 'c83eb71f09mshc819297d9b580fap1170fdjsnb4b0f7eb210d',
    'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
  }
};


const getCitiesData = async() => {
  try{
      // const {cities: {cities}} = await axios.get(URL, options);
      const response = await axios.get(URL, options);
      return response;
  }
  catch(error){
    console.log(error)
  }

}
export default getCitiesData