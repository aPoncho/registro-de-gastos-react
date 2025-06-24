import { useState, useEffect } from 'react';
import './App.css';
import FormularioGasto from './Components/FormularioGasto';
import ListaGastos from './Components/ListaGastos';

function App() {
    const [gastos, setGastos] = useState(() => {
      const gastosGuardados = localStorage.getItem('gastos');
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
  console.log('Función updateExpense en App.js recibiendo:');
  console.log('ID:', id, typeof id);
  console.log('Datos a actualizar:', gastoActualizado);

  setGastos(prevGastos =>
    prevGastos.map(gasto => {
      // --- PUNTO DE CONTROL 3 ---
      // Esto se mostrará por cada item en tu lista
      console.log(`Comparando: ${gasto.id} === ${id} -> ${gasto.id === id}`);

      if (gasto.id === id) {
        console.log('¡Coincidencia encontrada! Actualizando item...');
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
