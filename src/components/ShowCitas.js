import React from 'react';
import PropTypes from 'prop-types';


const ShowCitas = ({cita, delCita}) => {
  return(
    <>
      <div>
        <p>Mascota: {cita.mascota}</p>
        <p>Dueño: {cita.dueño}</p>
        <p>Ingreso: {cita.fecha} a las {cita.hora}</p>
        <p>Sintomas: {cita.sintomas}</p>
        <button onClick={() => {delCita(cita.id)}}>Borrar</button>
      </div>
    </>
  );
}

ShowCitas.propTypes = {
  cita: PropTypes.object.isRequired,
  delCita: PropTypes.func.isRequired
}

export default ShowCitas;