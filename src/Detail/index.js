import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import{Container,Grid,Chip, Button} from "@mui/material"
import { getDataFromPokemon } from "../services";



const Detail =()=>{
    
    const {name} = useParams();
     
    const history = useNavigate();
    
    const [country,setCountry] = useState({});

    const fetchCountry = async()=>{
        const response = await getDataFromPokemon(`
        https://restcountries.com/v3.1/name/${name}`
        );

        console.log(response)
        setCountry(response[0])
    };

    useEffect(()=>{
        fetchCountry();
    },[]);


return (

<Container>
<Button variant="contained" onClick={()=> history(-1)}> BACK</Button>

    {Object.keys(country).length > 0 && (
        <Grid 
        container
        aligntItems ="center"
        spacing ={3}>
            <Grid item md={6}>
                <img src={country.flags.svg} width={400} alt=""/>
            </Grid>
            <Grid item md={6}>
                <p><b>Nombre Nativo</b>: {country.name?.common}</p>
                <p><b>Poblacion</b>: {country.population}</p>
                <p><b>Region</b>: {country.region}</p>
                <p><b>Sub Region</b>: {country.subregion}</p>
                <p><b>Capital</b>: {country.capital}</p>
            </Grid>
    

        </Grid>
    )}

</Container>

)

}


export default Detail;