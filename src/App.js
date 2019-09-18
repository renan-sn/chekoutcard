import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './App.css';

export default function App() {
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');
  const [validade, setValidade] = useState('');
  const [cvc, setCvc] = useState('');
  const [focused, setFocused] = useState('');

  const inFocused = (e) => {
    setFocused(e.target.type);
  }

  const submitForm = (e) => {
    e.preventDefault();
  }

  return (
    <div className="container">
      
      <h2>Sua compra está quase finalizada...</h2>

        <form onSubmit={submitForm}>
          <label>Preencha seus dados abaixo:</label>

          <div className="area">
            <Cards 
              number={numero}
              name={nome}
              expiry={validade}
              cvc={cvc}
              focused={focused}
            />
          
            <div className="numero-nome">
              <input type="number" placeholder="Número do cartão" className="numero"
                onChange={(event) => (setNumero(event.target.value))}
                onFocus={inFocused}
               />
              <input type="text" placeholder="Nome completo" className="nome"
                onChange={(event) => (setNome(event.target.value))}
                onFocus={inFocused}
              />
              
              <div className="validade-cvc">
                <input type="number" placeholder="Validade" className="validade"
                  onChange={(event) => (setValidade(event.target.value))}
                  onFocus={inFocused}
                />
                <input type="number" placeholder="CVC" className="cvc"
                  onChange={(event) => (setCvc(event.target.value))}
                  onFocus={inFocused}
                />
              </div>

              <button>PAGAR AGORA</button>
            </div>
          </div>  
        </form>
    
    </div>
  );
}
