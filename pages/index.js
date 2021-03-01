import React from 'react';
import Capa from '../src/components/commons/Capa';
import Box from '../src/components/foundation/layout/Box';
import Cabecalho from '../src/components/commons/Cabecalho';
import Rodape from '../src/components/commons/Rodape';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import FormMessage from '../src/components/patterns/FormMessage';

export default function Home() {
  return (
    <Box>
      <Capa />
      <Cabecalho />
      <WrapperProjetos />
      <FormMessage />
      <Rodape />
    </Box>
  );
}
