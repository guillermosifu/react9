import { useState } from "react";

const FormRegister =()=>{
    //como podemos captura el valor del input

    const [nombre,setNombre] = useState("")

    const [apellido,setApellido] = useState("")

// en react la forma de capturar el valor de un input 
// es usando el onChange este evento nos va permitir capturar el valor
// de lo input y lo guardo en un variable "NOMBRE "
//la palabra que uda mucho en react HANDLE


 const handleInputName = (e)=>{
    // que debemos hacer pa poder darle el valor
    // recorde que le valor dentro de ()
    setNombre(e.target.value)

 }

 const handleInputLastName =(e)=>{
    setApellido(e.target.value)}


    return(
        <div>
            <h4>Formulario de Registro</h4>
            <h4>NOMBRE {nombre}</h4>
            <h4>APELLIDO {apellido}</h4>
           
            <form action="">
                
                <input type="text"  placeholder="ingrese nombre " onChange={handleInputName}/>

                <input type="text" placeholder="ingrese apellido" onChange={handleInputLastName}/>

               
            </form>
        </div>
    )

}

export default FormRegister;