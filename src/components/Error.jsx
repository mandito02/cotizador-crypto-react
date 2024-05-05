import React from 'react'
import styled from '@emotion/styled'

const Ad = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: #db4646ba;
  text-align: center;
`;

const Error = ({children}) => {
  return (
    <Ad>{children}</Ad>
  )
}

export default Error