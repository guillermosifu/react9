import{Container,Grid,FormControl ,InputLabel, TextField, Select,MenuItem}
 from "@mui/material"
const Flags =()=>{

    return(
        <Container>
          <Grid container spacing ={3} mt ={5}>
            <Grid item md={6} sm={4}>
           <TextField 
           label ="busa tu bandera" fullWidth/>
            </Grid>
            <Grid item md={6} sm={4}>
                <FormControl fullWidth>
                    <InputLabel>busca tu region</InputLabel>
                    <Select label = "busca tu bandera" >
                        <MenuItem value ="all">Todas las regiones</MenuItem>
                        <MenuItem >Africa</MenuItem>


                    </Select>
                </FormControl>

            </Grid>

          </Grid>
            
        </Container>
    )
}


export default Flags;