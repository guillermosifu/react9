import {Container ,Grid,Card,CardMedia,CardContent} from "@mui/material"
import { getDataFromPokemon } from "./services";
import {useEffect, useState} from "react"


const Home =()=>{

    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

    //vamos a crear una variable la cual se encaragar de guardar la lista de pokemones

    const[pokemons,setPokemon] = useState([])

    //debemos crear una fucnion la cual se ecanrgue de ejecutar a getdatafrokemon y la data retorne esa funcion guardandole en setPokemon
 const fetchPokemonList = async ()=>{
    const listPokemones = await getDataFromPokemon();
// ahora como ya tenemos la lista de pokemons hah que usar la funcion setPokemons para poder guaardar esa lista 
console.log("listapokemones", listPokemones.results);
setPokemon(listPokemones.results);
 };


//en react existe una fucnion llamada useEffect la cual se ejecuta cuando 
//la pagina  esta iniciando , vamos usar usar UseEfect si queremos ejecutar algo  al inicioa de la applicaiocn 
//la estructura de useEfect es la sgtt
useEffect(()=>{
    fetchPokemonList();
    //importante por ahora en los useEfdect debemos coloca un array vacio esto de hace para evitar un bucle infinito , si no colacmo el arraya ñla funciones estar haciendo peticiones sin control 
},[]);





return(
<Container>
    <h1>Pokedex</h1>
   <Grid container spacing ={3}>

    {pokemons.map((pokemon, index)=>(
        //aca el codigo visual 
        <Grid item md ={4} sm ={12} xs={12}>
            <Card>
                <CardMedia component ="img" className="img-pokemon" image={`${imgUrl}${index +1}.svg`}>

                    

                </CardMedia>
            </Card>
        </Grid>
    ))}
   
   </Grid>


    
</Container>


)

}


export default Home;