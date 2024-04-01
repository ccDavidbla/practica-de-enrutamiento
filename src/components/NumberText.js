import React from 'react';
import { useParams } from 'react-router-dom';

const NumeroOTexto = () => {
    let { value } = useParams();
    return <h2> El número es: {value}</h2>;
};

export default NumeroOTexto;
