import React from 'react';
import PropTypes from 'prop-types';


const ShowCitas = ({cita, delCita}) => {
  return(
    <>
      <div className="Card my-1 border p-2">
        <p><span className="U-colorGoold">Mascota</span>: {cita.mascota}</p>
        <p><span className="U-colorGoold"> Dueño</span>: {cita.dueño}</p>
        <p><span className="U-colorGoold">Ingreso</span>: {cita.fecha} a las {cita.hora}</p>
        <p> <span className="U-colorGoold">Sintomas</span>: {cita.sintomas}</p>
        <button
          className="Card-button w-50 bg-danger border-danger text-white m-auto d-block"
          onClick={() => {delCita(cita.id)}}
        >
            Borrar
          </button>
      </div>
    </>
  );
}

ShowCitas.propTypes = {
  cita: PropTypes.object.isRequired,
  delCita: PropTypes.func.isRequired
}

export default ShowCitas;