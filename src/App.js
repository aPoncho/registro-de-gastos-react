import { useState, useEffect } from 'react';
import './App.css';
import FormularioGasto from './Components/FormularioGasto';
import ListaGastos from './Components/ListaGastos';

function App() {
    const [gastos, setGastos] = useState(() => {
      const gastosGuardados = localStorage.getItem('gastos');
      //Si existen los datosGuardados en local storage, los parsea en el array, si no devuelve un array vacio.
      return gastosGuardados ? JSON.parse(gastosGuardados) : [];
    });
    
  //LEER gastos, se ejecuta al cargar el componente
  useEffect(() => {
    const gastosGuardados = localStorage.getItem('gastos');
    
    if (gastosGuardados) {
      setGastos(JSON.parse(gastosGuardados));
    }
  }, [] //el array vacio asegura que se ejecute al montar
);

//GUARDAR, se ejecuta cuando el estado "gastos" cambia
useEffect(() => {
  localStorage.setItem('gastos', JSON.stringify(gastos));
}, [gastos] //se ejecuta cuando se modifique "gastos"
);

//CREAR, recibe un gasto y lo setea en un array de gastos
const agregarGasto = (gasto) => {
  setGastos([ ...gastos, {id: Date.now(), ...gasto }]);
};

//ELIMINAR, borra un gasto del array con el id que corresponda
const borrarGasto = (id) => {
  setGastos(gastos.filter(gasto => gasto.id !== id));
};

//ACTUALIZAR, recibe una id y el gasto actualizado y remplaza el gasto correspondiente
const actualizarGasto = (id, gastoActualizado) => {

  setGastos(prevGastos =>
    prevGastos.map(gasto => {

      if (gasto.id === id) {
        return { ...gasto, ...gastoActualizado };
      }
      return gasto;
    }));
  
};

  return (
    <div className="app-container">
      <h1>Registro de Gastos</h1>
      <FormularioGasto alAgregarGasto={agregarGasto} />
      <ListaGastos
      gastos={gastos}
      alBorrarGasto={borrarGasto}
      alActualizarGasto={actualizarGasto}
      />
    </div>
  );
}

export default App;
