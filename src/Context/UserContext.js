import { createContext, useState } from "react";

export const UserContext = createContext()
// todo context neecesita un PROVIDER , sin esto no funcionaria
export const UserProvider =(props)=>{
const [user,setUser] = useState({
    name:"guillermo",
    last_name:"sifuentes"
})


 return(
    <UserContext.Provider value={{user,setUser}}>
        {props.children}
    </UserContext.Provider>


)

}

