import {useState} from "react";

function FormularioGasto({alAgregarGasto}) {
    const [descripcion, setDescripcion] = useState('');
    const [cantidad, setCantidad] = useState('');

    const manejarSubmit = (event) => {
        //Esto es para evitar que se recargue la pagina al enviar el formulario
        event.preventDefault();

        //Validacion para no enviar gastos vacios
        if (!descripcion || !cantidad || cantidad < 1) {
            alert('Por favor completar ambos campos');
            return;
        }

        //llama a la funcion que vino de App.js pasándole los datos del nuevo gasto
        alAgregarGasto({descripcion, cantidad : parseFloat(cantidad)});

         // Limpia los campos del formulario después de enviarlo
        setDescripcion('');
        setCantidad('');
    };

    return (
        <div className="expense-form">
            <h3>Agregar Nuevo Gasto</h3>
            <form onSubmit={manejarSubmit}>
            <div className="form-group">
                <label>Descripción:</label>
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Monto:</label>
                <input type="number" value = {cantidad} onChange={(e) => setCantidad(e.target.value)}/>
            </div>
            <button type="submit" className="form-button">Agregar Gasto</button>
        </form>
        </div>
    );
}

export default FormularioGasto;