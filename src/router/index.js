import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../Home"
import Form from "../../src/componentes/Form"
import Git from "../PracticaGit"
import FormUsuario from "../FormUser"
import Flags from "../Flags"
import Detail from "../Detail"
import Login from "../pages/Login"

//nuestro router va a ser un componente el cual se encargue de retornar las rutas de su respectvia vista 

const Router =()=>{

    return(
        <BrowserRouter>        
        <Routes>
            {/* publicas */}
            <Route path="/" element={<Home/>}/>
            <Route path="/formulario" element={<Form/>} />
            <Route path="git" element={<Git/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="/banderas" element={<Flags/>} />
            <Route path="/banderas/detail/:name" element={<Detail/>}/>
          

            {/* privadas */}


        </Routes>      
        
        
        </BrowserRouter>
    )

}



export default Router;