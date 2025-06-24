import ItemGasto from './ItemGasto';

function ListaGastos({gastos, alBorrarGasto, alActualizarGasto}) {
    return (
        <div className="expense-list">
            <h2>Lista de Gastos</h2>
            <div className="expense-item list-header">
            <div className="expense-item-description">Descripción</div>
            <div className="expense-item-amount">Monto</div>
            <div className="expense-item-actions">Acciones</div>
        </div>
            {gastos.length === 0 ? (
                <p>No Hay Gastos Registrados.</p>
            ) : (
                <ul>
                    {gastos.map((gasto) => (
                        <ItemGasto 
                        key = {gasto.id}
                        gasto = {gasto}
                        alBorrar ={alBorrarGasto}
                        alActualizar = {alActualizarGasto} />
                    ))}
                </ul>
            )}
        </div>
    );
    
};

export default ListaGastos;