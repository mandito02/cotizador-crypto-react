import useSelectCurrency from "../hooks/useSelectCurrency";
import styled from "@emotion/styled";
import currencies from "../data/currencies";
import { useEffect, useState } from "react";
import Error from "./Error";

const Button = styled.button`
  font-family: "Lato", sans-serif;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #66a2fe;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({setCurrencies}) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [SelectCurrency, currency] = useSelectCurrency(
    "Selecciona tu moneda",
    currencies
  );

  const [SelectCryptoCurrency, cryptoCurrency] = useSelectCurrency(
    "Selecciona tu Criptomoneda",
    cryptos
  );

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const response = await fetch(url);
      const result = await response.json();

      const arrayCripto = result.Data.map((data) => {
        const object = {
          code: data.CoinInfo.Name,
          name: data.CoinInfo.FullName,
        };
        return object;
      });

      setCryptos(arrayCripto);
    };
    fetchData();  
  
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if([currency, cryptoCurrency].includes('')){
      setError(true);
      setTimeout(() => { 
        setError(false);
      }, 3000);
      return;
    };
    setCurrencies({currency, cryptoCurrency});
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <SelectCurrency />
        <SelectCryptoCurrency />

        <Button type="submit">Cambiar</Button>
      </form>
      {error ? <Error>Se requieren ambos campos para realizar la operación</Error> : null}
    </div>
  );
};

export default Form;
