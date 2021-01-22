import React, {useState} from 'react';
import Formulario from './components/Formulario';
import ShowCitas from './components/ShowCitas';


function App() {
  const [citas, setCitas] =useState([]);

  const addCitas = (infoCita) => {
    console.log(infoCita);
    setCitas([...citas,infoCita]);
  }
  return (
    <>
      <h2>Pedidos</h2>
      <Formulario  addCitas={addCitas}/>



      <h2>Citas</h2>
      {citas.map((cita) => {
        return (<ShowCitas
          key={cita.id} 
          cita={cita} 
        />)
      })
      }
    </>
  );
}

export default App;
