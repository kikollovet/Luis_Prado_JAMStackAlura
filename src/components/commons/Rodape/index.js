import styled from 'styled-components'

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
    padding-top: 4px;
    padding-right: 4px;
    padding-left: 4px;
`

const LinkImagem = styled.a`
    background-color: #E9C46A;
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
            <RodapeIcon src="/images/githubIconFinal.svg" width="28px" height="28px" href="http://www.github.com/kikollovet" />
        </RodapeWrapper>
    )
}