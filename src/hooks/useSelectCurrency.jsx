import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  font-family: "Lato", sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  margin-top: 20px;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  margin-top: 10px;
`;

const useSelectCurrency = (label, options) => {
  const [state, setState] = useState("");
  
  const SelectCurrency = () => {
    return (
        <div>
          <Label>{label}</Label>
          <Select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="" disabled hidden>
              - Seleccionar -
            </option>
            {options.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </Select>
        </div>

    );
  };
  return [SelectCurrency, state];
};

export default useSelectCurrency;
