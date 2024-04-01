import React from 'react';
import { useParams } from 'react-router-dom';

const TextoConColor = () => {
    let { word, textColor, bgColor } = useParams();
    return (
        <h2 style={{ color: textColor, backgroundColor: bgColor }}> La Plabra es: {word}</h2>
    );
};

export default TextoConColor;
