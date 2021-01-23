import React, {useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import ShowCitas from './components/ShowCitas';


function App() {

  let citasLocalStorage = JSON.parse(localStorage.getItem('citas'));
  if(!citasLocalStorage){
    console.log('No tengo localstorage');
    //si no tengo citas en localStorage entonces voy a guardar un arreglo vacio 
    citasLocalStorage = [];
  }

  const [citas, setCitas] =useState(citasLocalStorage);

  const addCitas = (infoCita) => {
    setCitas([...citas,infoCita]);
  }
  
  const delCita = (id) => {
    let newCitas = citas.filter((cita) => {
      return  cita.id !== id
    })
    setCitas(newCitas);
  }
  
  //LOCALSTORAGE: Cada que cambien el state citas tenemos que hacer que el localStorage se actualiza para esto 
  //usamos useEffect, este se ejecuta cuando esta lista la pag, y observa los cambios en un elemento especifico
  //en este caso el elemento especifico seria citas

  useEffect( () => {
    if(citasLocalStorage){
      //si tengo citas en localStorage voy a pasarle como string el state citas
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }    

  },[citas]);

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
