import React, { useState } from 'react'
import '../App.css'

function SecondDivisor() {
  const [numerator, setNumerator] = useState('');
  const [denominator, setDenominator] = useState('');
  const [result, setResult] = useState([]);

  const handleCalculate = () => {
    if (denominator !== '0') {
      const divisionResult = parseFloat(numerator) / parseFloat(denominator);
      const steps = [];

      for (let i = 0; i < parseFloat(denominator); i++) {
        const stepStart = (i * divisionResult).toFixed(2);
        const stepEnd = ((i + 1) * divisionResult - 0.01).toFixed(2);
        steps.push(`${stepStart} a ${stepEnd}`);
      }

     
      setResult(steps);
    } else {
     
      setResult(['Não é possível dividir por zero']);
    }
  };

  return (
    <div className="divisor-content">
      <h1>Float 1:</h1>
      <div className='input-container'>
        <input
          type="number"
          placeholder="Numerador"
          value={numerator}
          onChange={(e) => setNumerator(e.target.value)}
        />
        <input
          type="number"
          placeholder="Denominador"
          value={denominator}
          onChange={(e) => setDenominator(e.target.value)}
        />
        <button onClick={handleCalculate}>Calcular</button>
      </div>
      <div className='result-content'>
        {result.map((step, index) => (
          <p key={index}>{step}</p>
        ))}
      </div>
    </div>
  );
}

export default SecondDivisor; 