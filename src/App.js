import React, {useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import ShowCitas from './components/ShowCitas';
import toastr from 'toastr';
import './toastr.min.css'


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
    toastr.success('Cita CREADA')
  }
  
  const delCita = (id) => {
    let newCitas = citas.filter((cita) => {
      return  cita.id !== id
    })
    setCitas(newCitas);
    toastr.warning('CITA BORRADA')
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

  },[citas, citasLocalStorage]);

  return (
    <>

      <div className="container mt-3">
        <header className="row justify-content-center">
          <h1 className="">Crear citas</h1>

        </header>
        <div className="row" >
          <div className="U-border col-sm mb-2">
            <h2 className="text-center">Nueva cita</h2>
            <Formulario  addCitas={addCitas}/>
            <div className="line"> </div>
          </div>


          <div className="col-sm vh-100 border overflow-auto">
            <h2 className="text-center">Citas</h2>
            {citas.map((cita) => {
              return (
                <ShowCitas
                  key={cita.id} 
                  cita={cita}
                  delCita={delCita} 
                />)
            })
            }
          </div>
        </div>
        

        

      </div>



    </>
  );
}

export default App;
