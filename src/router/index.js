import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../Home"
import Form from "../../src/componentes/Form"
import Git from "../PracticaGit"
import FormUsuario from "../FormUser"

//nuestro router va a ser un componente el cual se encargue de retornar las rutas de su respectvia vista 

const Router =()=>{

    return(
        <BrowserRouter>        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="form" element={<Form/>} />
        </Routes>      
        
        
        </BrowserRouter>
    )

}



export default Router;