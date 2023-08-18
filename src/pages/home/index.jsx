import React, { useState } from 'react';
import { Button } from '../../components';


const showLines = (totalValue, parts) => {
    const lines = [];
    const step = totalValue / parts;
    let start = 0;
    for (let i = 1; i <= parts; i++) {
        let end = step * i;
        if (end % 1 !== 0) {
            end = parseFloat(end).toFixed(1);
        }
        lines.push(<div key={i}>De {start} a {end}</div>);
        start = end;
    }
    return <div>{lines}</div>;
};

function Home() {
    // State to hold the input values
    const [valor, setValor] = useState('');
    const [divisor, setDivisor] = useState('');
    const [show, setShow] = useState(false);

    // Functions to update the state when the inputs change
    const handleValorChange = (e) => {
        setValor(e.target.value);
    };

    const handleDivisorChange = (e) => {
        setDivisor(e.target.value);
    };

    const handleClick = () => {
        setShow(true);
    };

    return (
        <div>
            <input type="text" name='valor' value={valor} onChange={handleValorChange} />
            <input type="text" name='divisor' value={divisor} onChange={handleDivisorChange} />
            <Button onClick={handleClick}>Enviar</Button>
            {
                show && showLines(valor, divisor)
            }
        </div>
    );
}

export default Home;
