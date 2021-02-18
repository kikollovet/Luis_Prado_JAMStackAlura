import styled from 'styled-components'
import Capa from '../src/components/commons/Capa'
import { Box } from '../src/components/foundation/layout/Box'
import Cabecalho from '../src/components/commons/Cabecalho'
import Rodape from '../src/components/commons/Rodape'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Box>
      <Capa />
      <Cabecalho />
      <Rodape />
    </Box>
  )
}
