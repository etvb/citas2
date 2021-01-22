import React, {useState} from 'react';
import Formulario from './components/Formulario';
import ShowCitas from './components/ShowCitas';


function App() {
  const [citas, setCitas] =useState([]);

  const addCitas = (infoCita) => {
    console.log(infoCita);
    setCitas([...citas,infoCita]);
  }

  const delCita = (id) => {
    console.log(id)

    let newCitas = citas.filter((cita) => {
      return  cita.id !== id
    })
    setCitas(newCitas);
  }

  return (
    <>
      <h2>Pedidos</h2>
      <Formulario  addCitas={addCitas}/>



      <h2>Citas</h2>
      {citas.map((cita) => {
        return (
          <ShowCitas
            key={cita.id} 
            cita={cita}
            delCita={delCita} 
          />)
      })
      }
    </>
  );
}

export default App;
