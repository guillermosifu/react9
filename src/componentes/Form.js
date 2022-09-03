import imgone from '../assets/codigo.png'

const Form =()=>{
    return(
        <div>
            <form action="" className="container">
                <h4>Formulario de Registro</h4>
                <h4>Nombre</h4>
                <h4>Apellidoss</h4>
                <img className='mt-3 mb-5' src={imgone} alt="" 
                ></img>
                <p className="row col-md-6">
                    <img width={100}  src="https://images-ext-1.discordapp.net/external/NAUkiHkvJ3WJR3xxu3W-oyIJooWT9m-rFDN9RWTB0mQ/%3Fq%3Dtbn%3AANd9GcQjiDWCzQbTMuFgL3QpvVsy1kjWazwPjCrn5w%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images" alt="" ></img>
                    <input type="text" placeholder="Ingrese su nombre " className="form-control" />
                </p>
                
                
                
            </form>
        </div>
    )
}



export default Form;