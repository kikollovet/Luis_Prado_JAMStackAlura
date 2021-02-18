import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardWrapper = styled.div`
        display: flex;
        /* flex: 1; */
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        border: 1px solid #E9C46A;
        box-sizing: border-box;
        /* padding: 10px; */
        margin: 10px;
        @media only screen and (min-width: 768px){ 
            flex-direction: row;
            align-items: flex-start;
        }
`

const CardTitle = styled.span`
    font-family: 'Fira Sans Condensed', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    /* text-align: center; */
    padding-top: 20px;
    padding-bottom: 20px;
    word-break: break-word;
    width: 279px;
    text-align: center;
    @media only screen and (min-width: 768px){ 
        font-size: 32px;
        line-height: 38px;
        padding-top: 41px;
        padding-bottom: 41px;
        padding-right: 20px;
        padding-left: 20px;
        width: 240px;
    }
`

const CardImage = styled.div`
    width: 289px;
    height: 177px;
    background: url(${({ src }) => src});
    background-size:cover;
    @media only screen and (min-width: 768px){
        width: 593px;
        height: 320px;
    }
`

const TextoDestaque = styled.div`
    font-family: 'Fira Sans Condensed', sans-serif;
    font-style: normal;
    font-size: 24px;
    line-height: 29px;
    position: relative;
    background-color: rgba(255, 255, 255, 0.5);
    color:black;
    text-align: center;
    border: 1px solid #000000;
    top: 10px;
    left: 10px;
    width: 38%;
    padding-left: 10px;
    padding-right: 10px;
    @media only screen and (min-width: 768px){
        
        font-weight: 400;
        font-size: 38px;
        line-height: 46px;
       
        top: 25px;
        left: 25px;
        width: 25%;
        padding-left: 10px;
        padding-right: 10px;
        
    }
    
`
export default function CardDestaque({src, children}){
    return(
        <CardWrapper>
            <CardImage src={src}>
                <TextoDestaque>Destaque</TextoDestaque>
            </CardImage>
            <CardTitle>
                {children}
            </CardTitle>
        </CardWrapper>
    )
}

CardDestaque.defaultProps = {
    src: 'https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png',
    children: 'Precisa ser passado o título do cartão'
}

CardDestaque.propTypes = {
    src: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}