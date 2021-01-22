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
    // [e.target.name]: con esto tomamos el valor que tenga name en los inputs, le decimos que el name va a tenenr el valor e.target.value
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setCita(cita.id = numRandom());
    console.log(cita);
    
  }

  const numRandom = () => {
    //Make a random number
    return Math.floor(Math.random() * (10000 - 0)) + 0;
  }

  return(
    
    <form
      onSubmit={handleSubmit}
    >
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
        onChange={handleChange}
      />
      <label htmlFor="fecha">Fecha</label>
      <input 
        id="fecha"
        type="date"
        name="fecha"
        onChange={handleChange}
      />
      <label htmlFor="hora">Hora</label>
      <input 
        id="hora"
        type="date"
        name="hora"
        onChange={handleChange}
      />
      <label htmlFor="sintomas">Síntomas</label>
      <textarea
        id="sintomas"
        name="sintomas"
        onChange={handleChange}
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

