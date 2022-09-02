import { useState } from "react";
//el primer paso para definir nuestro componenente es el NOMBRE
//EL nombre debe iniciar con MAYUCULA 
// ahora el componente es basicamnente una funcion por ende podemos crearlo usansi 
//arrow function o funcion declarativa

 const PrimerComponente = ()=>{
// react tiene una funcion interna llamada useState 
// es una funcion que se encarga de manajer el estado de una variable 
// para poder usara esa funcion tengo que importarla
// AL usar useState la forma en la cual creamo una varuable cambia
// porque debemos definir 2 cosas primero el nombre de la vaurbLE Y segundo la funcion la cual cambiara el estado 
//count : la vauiable  esta va mostrar un valor 
//setCount va ser la funcion que se encaragra de poder un valor a count 
//ojo el valor que va dentri de useSate sera el valor inicial de la variable 

const [count,setCount] = useState(0)

const sumar =()=>{
   setCount(count + 10);
}
const restar =()=>{
    setCount(count -1);
}

return(
<div>
<h1>ESTE ES MI COMPONENTE {count}</h1>
{/* dentro de cada etiqueta se llama a la vriable entre llaves  */}
<h2>holla desde componente{count}</h2>
<button onClick={sumar}>sumar </button>
<button onClick={restar}>restar</button>
</div>
)




 }


 export default PrimerComponente;