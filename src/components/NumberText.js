import React from 'react';
import { useParams } from 'react-router-dom';

const NumeroOTexto = () => {
    let { value } = useParams();
    return <h2>{value}</h2>;
};

export default NumeroOTexto;
