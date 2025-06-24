
//Funcion que genera cada gasto de la lista de gastos
function ItemGasto({gasto, alBorrar, alActualizar}) {
    const handleBorrar = () => {
        //llama a la funcion "alBorrar" que viene de App.js
        alBorrar(gasto.id);
    };

    const handleActualizar = () => {
        //pedir un nuevo monto con un prompt
        const nuevaCantidad = prompt('Ingrese nueva cantidad para el gasto ' , gasto.cantidad);
        
        if (nuevaCantidad) {
            console.log('Intentando actualizar en ExpenseItem...');
            console.log('ID a actualizar:', gasto.id, typeof gasto.id);
            console.log('Nuevo monto:', nuevaCantidad);
            alActualizar(gasto.id, {cantidad: parseFloat(nuevaCantidad)});
        }
    };

    return (
        <div className="expense-item">
            <div className="expense-item-description">{gasto.descripcion} </div>
            <div className="expense-item-amount">${gasto.cantidad}</div>
            <div className="expense-item-actions">
                <button onClick={handleActualizar}>Editar</button>
                <button onClick={handleBorrar}>Eliminar</button>
            </div>
        </div>
    );
}

export default ItemGasto;