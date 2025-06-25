import {useState} from "react";

function FormularioGasto({alAgregarGasto}) {
    const [descripcion, setDescripcion] = useState('');
    const [cantidad, setCantidad] = useState('');

    const manejarSubmit = (event) => {
        //Esto es para evitar que se recargue la pagina al enviar el formulario
        event.preventDefault();
        let string_cantidad = cantidad.toString();   

        //Validacion para no enviar gastos vacios
        if (!descripcion || !cantidad) {
            alert('Por favor completar ambos campos');
            return;
        } else if (cantidad < 1) { //Validacion para evitar cantidades menores a 1
            alert('La cantidad debe ser un numero positivo');
            return;
        } else if (descripcion.length > 30) { //Validacion para largo de descripcion mayor a 30
            alert('Por favor ingrese una descripcion no mayor a 30 caracteres');
            return;
        } else if (string_cantidad.length > 9){ //Validacion para largo de cantidad mayor a 9
            alert('Por favor ingrese una cantidad no mayor a 9 numeros');
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