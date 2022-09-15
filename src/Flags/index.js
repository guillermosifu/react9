import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getDataFromPokemon } from "../services";

const Flags = () => {
  const [countries, setCountries] = useState([]);

  const [region, setRegion] = useState("");

  const fetchCountries = async () => {
    const response = await getDataFromPokemon(
      "https://restcountries.com/v3.1/all"
    );

    setCountries(response);
  };

  const handleRegion = async (e) => {
    setRegion(e.target.value);
    // vamos a evala si el valor es igual all entonces ejecutas la funcion
    //fetchCountries
    if (e.target.value === "all") {
      fetchCountries();
      return;
    }
    // primero debemos limpiar para llebar con nueva informacion
    setCountries([]);
    const response = await getDataFromPokemon(
      `https://restcountries.eu/rest/v2/region/${e.target.value}`
    );

    setCountries(response);
  };
  //vamos a crea una funcion el cuala se encaragra de buscar los paises
  const handleSearchCountry = (e) => {
    //esto es buena practixa decirle que busque por 3 a 4 letras la peticion
    const countryName = e.target.value;
    if (countryName.length === 0) {
      fetchCountries();
    }
    if (countryName.length > 3) {
      const filterCountries = countries.filter((country) =>
        country.name.official.toUpperCase().includes(countryName.toUpperCase())
      );
      setCountries(filterCountries);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6} sm={4}>
          <TextField
            onChange={handleSearchCountry}
            label="busca tu bandera"
            fullWidth
          />
        </Grid>
        <Grid item md={6} sm={4}>
          <FormControl fullWidth>
            <InputLabel>busca tu region</InputLabel>
            <Select label="busca tu bandera" onChange={handleRegion}>
              <MenuItem value="all">Todas las regiones</MenuItem>

              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Americas">Americas</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Erurope</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {countries.length >
          0  (
            countries.map((country) => (
              <Grid item md ={3} sx={12}>
                <Card>
                  <CardMedia component="img" image={country.flags.svg} />

                  <CardContent>
                    <h4>{country.name.official}</h4>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
      </Grid>
    </Container>
  );
};

export default Flags;
