import React, {useState} from "react";
import PropTypes from 'prop-types';

const Formulario = ({addCitas}) => {

  const [cita, setCita] = useState({
    mascota: '',
    dueño: '',
    fecha:'',
    hora:'',
    sintomas:''
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    // Cuando los inputs cambian se ejecuta esta funcion
    //...cita, crea una copia, esto porque cuando ecribias en otro input se remplazaba por lo ultimo que escribia
    // [e.target.name]: con esto tomamos el valor que tenga name en los inputs, le decimos que el name va a tenenr el valor e.target.value
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    //Si alguna de las variables del state cita esta vacia, existe un error
    if(cita.mascota.trim() === '' || cita.dueño.trim() === '' ||
      cita.fecha.trim() === '' || cita.hora.trim() === '' || cita.sintomas.trim() === ''){
      console.log('Esta vacio');
      setError(true);
      return
    }


    //add the filed cita.id width a random number, este id se usara para borrar la cita
    setCita(cita.id = numRandom());
    
    //reiniciamos el formulario, esto funciona por qu en cada input tenemos value={cita.elemento}
    setCita({
      mascota: '',
      dueño: '',
      fecha:'',
      hora:'',
      sintomas:''
    })    

    //Mandar citas, cada vez que damos clic en agregar cita, esa info se tienen que ir a un arreglo, 
    //este arreglo se encutra en app, asi que con lafuncion - - questa en app le mandamos nuestra cita y
    //se va a estar guardando en el state que esta en app
    addCitas(cita);
    setError(false);
  }

  const numRandom = () => {
    //Make a random number
    return Math.floor(Math.random() * (10000 - 0)) + 0;
  }

  return(
    <>
      {
        error ? <p class="alert alert-danger" role="alert">Todos los campos son obligatorios </p> : null
      }
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="mascota d-block">Nombre Mascota:
          <input 
            className="ml-1"
            id="mascota"
            type="text"
            name="mascota"
            onChange={handleChange}
            value={cita.mascota}
          />
        </label>
        <label htmlFor="dueño" className="d-block">Nombre Dueño:
          <input 
            className="ml-1"
            id="dueño"
            type="text"
            name="dueño"
            onChange={handleChange}
            value={cita.dueño}
          />
        </label>
        <label htmlFor="fecha" className="d-block">Fecha de Ingreso:
          <input 
            className="ml-1"
            id="fecha"
            type="date"
            name="fecha"
            onChange={handleChange}
            value={cita.fecha}
          />
        </label>
        <label htmlFor="hora" className="d-block">Hora de Ingreso:
          <input 
            className="ml-1"
            id="hora"
            type="time"
            name="hora"
            onChange={handleChange}
            value={cita.hora}
          />
        </label>
        <label htmlFor="sintomas" className="d-block">Síntomas:</label>
        <textarea
          className="w-100"
          id="sintomas"
          name="sintomas"
          onChange={handleChange}
          value={cita.sintomas}
        ></textarea>
        <button
          className="addButton d-block w-100 p-2"
          type="submit"
        >
          Agregar Cita
        </button>
      </form>
    </>
  );
}


Formulario.propTypes = {
  addCitas: PropTypes.func.isRequired

}


export default Formulario;

