//sera nuestrao archivo donde guardemos  nuestra peticiones 




//una buena pratica es alamacenar el API en una variable 

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100"


//POEMOS CREAR UNA FUNCION generica  la ual se encargue de reali
//como parametro vamos a ecibir  l URL que puede la lista de pokemones
// nos va dar mas detalles 
// url ser ale parametreo que reciba la url de la peticion 
//url = BASE_URL  significa que si la url esta vacia es decir cuansdo llamemos 
//a la funcion no le pasamos el valor por defecto sera BASE_URL
//url tomara el valor de base_url


//url tyoma el valor http//_link.com
//getDataFrompokemon ()

export const getDataFromPokemon = async (url= BASE_URL)=>{

    try{
        //ahora debemos ejecutar el fetch para poder traer informacion
       const response = await fetch (url);
       const data = await response.json();
       console.log("data",data);
       return data;
    }catch (error){
        console.log(error.message);
    }
}