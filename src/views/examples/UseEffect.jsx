import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function ImparPar(num) {
  const n1 = parseInt(num);
  if (n1 % 2 === 0) return "Par";
  if (n1 % 2 === 1) return "Ímpar";
}

const UseEffect = (props) => {
  //? ================= Exercicio 01 ==================

  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = "Eita!!!";
      }
    },
    [fatorial]
  );

  //? ================= Exercicio 02 ==================

  const [number1, setNumber1] = useState(1);
  const [ParImpar, setParImpar] = useState("");

  useEffect(
    function () {
      setParImpar(ImparPar(number1));
    },
    [number1]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercicio 01" />

      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>
        <input
          className="input"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio 02" />

      <div className="center">
        <div>
          <span className="text">O número é: </span>
          <span className="text red">{ParImpar}</span>
        </div>
        <input
          className="input"
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
