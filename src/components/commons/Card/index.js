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
        order: 1;
        @media only screen and (min-width: 768px){
            order: 0;
        } 
`

const CardTitle = styled.span`
    font-family: 'Fira Sans Condensed', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 279px;
    word-break: break-word;
    @media only screen and (min-width: 768px){ 
        font-size: 32px;
        line-height: 38px;
        padding-top: 41px;
        padding-bottom: 41px;
        width: 277px;
    }
`

const CardImage = styled.img`
    width: 289px;
    height: 177px;
    @media only screen and (min-width: 768px){
        width: 287px;
        height: 390px;
    }
`

// function CardImage({href}){
//     return <img href={href}/>
// }

export default function Card({src, children}){
    return(
        <CardWrapper>
            <CardImage src={src}/>
            <CardTitle>
                {children}
            </CardTitle>
        </CardWrapper>
    )
}

Card.defaultProps = {
    src: 'https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png',
    children: 'Precisa ser passado o título do cartão'
}

Card.propTypes = {
    src: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}