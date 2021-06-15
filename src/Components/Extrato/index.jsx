import React from "react";
import { Box, Botao } from "../UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map((data) => {
        return (
          <Items key={data.id} data={data}/>
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
