import React, {useState} from 'react';
import Formulario from './components/Formulario';

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
    </>
  );
}

export default App;
