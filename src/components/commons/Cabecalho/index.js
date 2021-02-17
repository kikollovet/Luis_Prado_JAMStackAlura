import styled from 'styled-components'
import { NavBar } from './NavBar'

const CabecalhoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    background-color: #FFF8E6;
`

const Logo = styled.div`
    font-family: 'Fira Sans Condensed', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    background-color: #E9C46A;
    padding: 7px 7px;
    margin-left: 8px;
    @media only screen and (min-width: 768px){
        font-size: 38px;
        line-height: 46px;
    }
`

export default function Cabecalho() {
    return (
        <CabecalhoWrapper>
            <Logo>{'<ME />'}</Logo>
            <NavBar><a href="">Sobre Mim</a><a href="">Contato</a></NavBar>
        </CabecalhoWrapper>
    )
}