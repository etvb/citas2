import React from 'react';

const ShowCitas = ({cita}) => {
  return(
    <>
      <div>
        <p>Mascota: {cita.mascota}</p>
        <p>Dueño: {cita.dueño}</p>
        <p>Ingreso: {cita.fecha} a las {cita.hora}</p>
        <p>Sintomas: {cita.sintomas}</p>
      </div>

    </>
  );
}

export default ShowCitas;