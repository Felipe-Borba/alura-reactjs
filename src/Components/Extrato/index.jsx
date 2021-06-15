import React from "react";
import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map((data) => {
        return (
          <div key={data.id}>
            <div>{data.type}</div>
            <div>{data.from}</div>
          </div>
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
