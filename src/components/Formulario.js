import React, {useState} from "react";

const Formulario = () => {

  const [cita, setCita] = useState({
    mascota: '',
    dueño: '',
    fecha:'',
    hora:'',
    sintomas:''
  });

  const handleChange = (e) => {
    // Cuando los inputs cambian se ejecuta esta funcion
    //...cita, crea una copia, esto porque cuando ecribias en otro input se remplazaba por lo ultimo que escribia
    // [e.target.name]: con esto le decimos que el name va a tenenr el valor e.target.value
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  return(
    
    <form>
      <label htmlFor="mascota">Nombre Mascota</label>
      <input 
        id="mascota"
        type="text"
        name="mascota"
        onChange={handleChange}
      />
      <label htmlFor="dueño">Nombre Dueño</label>
      <input 
        id="dueño"
        type="text"
        name="dueño"
      />
      <label htmlFor="fecha">Fecha</label>
      <input 
        id="fecha"
        type="date"
        name="fecha"
      />
      <label htmlFor="hora">Hora</label>
      <input 
        id="hora"
        type="date"
        name="hora"
      />
      <label htmlFor="sintomas">Síntomas</label>
      <textarea
        id="sintomas"
        name="sintomas"
      ></textarea>
      <button 
        type="submit"
      >
        Agregar Cita
      </button>

    </form>

  );
}

export default Formulario;

