import { Grid, TextField, CardContent, Button, Card } from "@mui/material";
import{useContext} from "react"
import{UserContext} from "../../Context/UserContext"

const Login = () => {

const {user,setUser} = useContext(UserContext);

  return (
    <Grid container alignItems="center" justifyContent="space-around" sx={{height:"100vh",padding:20,backgroundColor:"#FFD885"}}>
      <Grid item md={6}>
     <h4>{user.name} {user.last_name}</h4>
        <img
          src="https://i.postimg.cc/7hSnnPdF/wallpaper.webp"
          width={400}
          alt=""
        />
      </Grid>
      <Grid item md={6}>
        <Card sx={{width:500}}>
          <CardContent>
            <h5>Bienvenidos a Tecsup G9</h5>
            <p>La comunidad del Grupo the best</p>
            <Grid spacing={3} mt={5}>
              <TextField label="Email" fullWidth name="email" />
            </Grid>
            <Grid spacing={3} mt={5}>
              <TextField label="Password" fullWidth name="password" />
            </Grid>
            <Grid item md={12} mt={3}>
              <Button variant="contained" fullWidth size="large" sx={{backgroundColor:"#000"}}>
                Inicia Sesion
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
