import React from 'react';
import Capa from '../src/components/commons/Capa';
import Box from '../src/components/foundation/layout/Box';
import Cabecalho from '../src/components/commons/Cabecalho';
import Rodape from '../src/components/commons/Rodape';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import FormMessage from '../src/components/patterns/FormMessage';
import Button from '../src/components/commons/Button';
import Text from '../src/components/foundation/Text';
import Modal from '../src/components/commons/Modal';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <Box>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <FormMessage
            onClose={() => {
              setModalState(false);
            }}
            propsDoModal={propsDoModal}
          />
        )}
      </Modal>
      <Capa />
      <Cabecalho />
      <WrapperProjetos />
      <Box style={{ alignSelf: 'center', margin: '15px' }}>
        <Text variant="title">Entre em contato</Text>
        <Button onClick={() => setModalState(!isModalOpen)} style={{ alignSelf: 'center' }} type="button">+</Button>
      </Box>
      <Rodape />
    </Box>
  );
}
