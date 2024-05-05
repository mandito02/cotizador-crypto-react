import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ImagenCripto from ".//img/imagen-criptos.png";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: "";
    width: 250px;
    height: 2px;
    background-color: #4e82d1;
    display: block;
    margin: 20px auto 0 auto;
  }
`;

function App() {
  const [currencies, setCurrencies] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (Object.keys(currencies).length  > 0){
      const cotizarCrypto = async () => {
        setLoading(true);
        setResult({});
        const { cryptoCurrency, currency } = currencies;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
        const response = await fetch(url);
        const result = await response.json();
        setResult(result.DISPLAY[cryptoCurrency][currency]) 
        setLoading(false);
      }
      cotizarCrypto();
    }
  }, [currencies]);

  return (
    <Container>
      <Image src={ImagenCripto} alt="imagen cripto" />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Form
          setCurrencies={setCurrencies}
        />
        {loading && <Spinner/>}
        {result.PRICE && <Result
        result={result}
      />}
      </div>
     
    </Container>
  );
}

export default App;
