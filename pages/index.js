import styled from 'styled-components'
import Capa from '../src/components/commons/Capa'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Capa />
  )
}
