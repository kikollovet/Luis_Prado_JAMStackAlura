import styled from 'styled-components'
import PropTypes from 'prop-types'

const RodapeWrapper = styled.div`
    background-color: #FFF8E6;
    /* background-color: blue; */
    /* text-align: center; */
    /* text-align: center; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const IconImage = styled.img`
    padding: 4px;
`

const LinkImagem = styled.a`
    background-color: #E9C46A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function RodapeIcon({src, width, height, href}){
    return(
        <LinkImagem href={href}>
            <IconImage src={src} width={width} height={height} />
        </LinkImagem>
    )
}

export default function Rodape() {
    return (
        <RodapeWrapper>
            <RodapeIcon 
                src="/images/githubIconFinal.svg" 
                width="32px" 
                height="32px" 
                href="http://www.github.com/kikollovet"
            />
            <RodapeIcon 
                src="/images/linkedinIcon.svg" 
                width="32px" 
                height="32px" 
                href="http://www.linkedin.com/in/luis-henrique-llovet-38420795"
            />
            
        </RodapeWrapper>
    )
}

RodapeIcon.defaultProps = {
    src: 'https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png',
    width: '32px',
    height: '32px',
}

RodapeIcon.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}