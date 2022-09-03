import { useState } from "react"

const FormUsuario =()=>{
// la otra forma en la cual podemos guaradar datod de un input
// es un objeto para ello necesitamos qye los inputs tengan un name

 const [valorDeInputs,setValorInputs] = useState({
    nombre:"",
    apellido: "",
    correo:"",
    password:"",
 });




const handleInputValues =(e)=>{
    //debemos extraer 2 cosas del event
    // 1 el name de cada input
    //2 el value 
    // name = e.target.name [name].valeu
    //value = e.target.value

    const {name,value} =e.target;
    //...vlorDeinputs : es para hacwr una copia del objeto actual y ademas estamos agregando el nuevo key y vakue qye recibimos 
    //[name] recuerden que name es una variable por ende para poder usarl como key 
    //debemo colocarla en []
    //value : el valor que estamos recibiendo de nuestro input

    setValorInputs({
        ...valorDeInputs,
        [name]: value,
    });
};

    return(
        <div>
            <form action="">
                <h4>Fromulario de usuarios </h4>
                <h5>nombre {valorDeInputs.nombre}</h5>
                <h5>apellido {valorDeInputs.apellido}</h5>
                <h5>correo</h5>
                <h5>password</h5>
                <p>
                    <input type="text" name="nombre" placeholder="ingresa tu nombre " onChange={handleInputValues}/>
                </p>
                <p>
                    <input type="text" name="apellido" placeholder="ingresa tu Apellido "onChange={handleInputValues} />
                </p>
                <p>
                    <input type="email" placeholder="ingresa tu email " onChange={handleInputValues}/>
                </p>
                <p>
                    <input type="password" placeholder="ingresa tu password " onChange={handleInputValues}/>
                </p>
                <p>
                    <button>INGRESA</button>
                </p>
            </form>
        </div>
    )

}



export default FormUsuario;