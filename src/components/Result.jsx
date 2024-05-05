import styled from "@emotion/styled";

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    result;
  const Resul = styled.div`
    color: #fff;
    font-family: "lato", sans-serif;
    display: flex;
    align-items: center ;
    gap: 20px;
    margin-top: 20px;
  `;
  const Imagen = styled.img`
    display: block;
    width: 120px;
    margin-top: 5px;
    margin-right: 20px;
  `;
  const Price = styled.p`
    font-size: 24px;
    color: #fff;
    font-family: "lato", sans-serif;
    span {
      font-weight: bold;
    }
  `;
  const Text = styled.p`
    font-size: 18px;
    color: #fff;
    font-family: "lato", sans-serif;
    span {
      font-weight: bold;
    }
  `;

  return (
    <Resul>
      
      <div>
        <Price>
          El precio es: <span>{PRICE}</span>
        </Price>
        <Text>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR} %</span>
        </Text>
        <Text>
          Última actualización: <span>{LASTUPDATE}</span>
        </Text>
      </div>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
    </Resul>
  );
};

export default Result;
