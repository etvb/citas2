import React from "react";

const Formulario = () => {
  return(
    
    <form>
      <label for="mascota">Nombre Mascota</label>
      <input 
        id="mascota"
        type="text"
        name="mascota"
      />
      <label for="dueño">Nombre Dueño</label>
      <input 
        id="dueño"
        type="text"
        name="dueño"
      />
      <label for="fecha">Fecha</label>
      <input 
        id="fecha"
        type="date"
        name="fecha"
      />
      <label for="hora">Hora</label>
      <input 
        id="hora"
        type="date"
        name="hora"
      />
      <label for="sintomas">Síntomas</label>
      <input 
        id="sintomas"
        type="date"
        name="sintomas"
      />
      <button 
        type="submit"
      >
        Agregar Cita
      </button>

    </form>

  );
}

export default Formulario;

