import React from 'react';

const Resultado = ({ total, plazo, cantidad }) => ( 
    <div className="u-full-width resultado">
        <h2>Resuen</h2>
        <p>La cantidad solicitada es: {cantidad}</p>
        <p>A pagar en: {plazo} Meses</p>
        <p>Su pago mensual es de: { (total / plazo).toFixed(2) }</p>
        <p>Total pagar: $ {(total).toFixed(2)}</p>
    </div>
);


export default Resultado;