import{Button,Dialog,DialogContent} from "@mui/material"
import { useState } from "react";



const PokemonDetail =()=>{
  const [open,setOpen] = useState(false);
  //vamos hacer una funcion que maneje el estado 

  const openDialog =()=>{
    setOpen(true)
  };

  const closeDialog=()=>{
    setOpen(false)
  }

    
    return(
        <div>
        <Button onClick={openDialog} variant ="contained" color="error"> Detalle del Pokemon</Button>
        <Dialog open={open} onClose={closeDialog} >
            <DialogContent>
                <h4>pokemon name</h4>
                <Button variant="contained" onClick={closeDialog}>Cerrar</Button>
            </DialogContent>
        </Dialog>
        </div>
    );
};


export default PokemonDetail;