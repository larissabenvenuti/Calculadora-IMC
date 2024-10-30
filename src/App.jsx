import { useState } from "react";
import "./style/App.css";

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultadoIMC, setResultadoIMC] = useState(null);
  const [classificacaoIMC, setClassificacaoIMC] = useState("");

  function calcularIMC(e) {
    e.preventDefault();
    if (peso && altura) {
      const imc = peso / (altura * altura);
      setResultadoIMC(imc.toFixed(1));
      classificarIMC(imc);
    }
  }

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacaoIMC("Baixo peso");
    } else if (imc > 18.5 && imc <= 24.9) {
      setClassificacaoIMC("Eutrofia - peso adequado");
    } else if (imc > 24.9 && imc <= 29.9) {
      setClassificacaoIMC("Sobrepeso");
    } else if (imc > 29.9 && imc <= 35) {
      setClassificacaoIMC("Obesidade - grau 1");
    } else if (imc > 34.9 && imc <= 39.9) {
      setClassificacaoIMC("Obesidade - grau 2");
    } else {
      setClassificacaoIMC("Obesidade extrema");
    }
  };

  return (
    <div>
      <header>
        <h2>Calculadora de IMC</h2>
      </header>
      <form onSubmit={calcularIMC}>
        <label>Peso: </label>
        <input
          type="number"
          placeholder="Insira seu peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <label>Altura: </label>
        <input
          type="number"
          placeholder="Insira sua altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button type="submit">Calcule seu IMC</button>
      </form>
    
      {resultadoIMC !== null && (
        <div className="resultado-container">
          <h3>Seu IMC é: {resultadoIMC}</h3>
          <h3>A classificação do IMC de acordo com a OMS é: {classificacaoIMC}</h3>
        </div>
      )}

      <footer>
        <p>Aluna: Larissa Benvenuti Antunes</p>
      </footer>
    </div>
  );
}
