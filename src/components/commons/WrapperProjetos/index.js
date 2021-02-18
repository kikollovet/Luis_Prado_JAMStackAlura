import styled from 'styled-components'
import Card from '../Card'
import CardDestaque from '../Card/CardDestaque'

const WrapperProjetosDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 32px;
        padding-bottom: 32px;
        @media only screen and (min-width: 768px){ 
            padding-top: 64px;
            padding-bottom: 64px;
        }
`

const SectionTitle = styled.span`
    font-family: 'Fira Sans Condensed', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;

    /* identical to box height */
    text-align: center;
    padding-bottom: 32px;
    @media only screen and (min-width: 768px){ 
        font-size: 60px;
        line-height: 72px;
        padding-bottom: 64px;
    }
`

const CardSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media only screen and (min-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export default function WrapperProjetos(){
    return(
        <WrapperProjetosDiv>
            <SectionTitle>Meus Projetos</SectionTitle>
            <CardSection>
                <Card src="https://static-cse.canva.com/blob/183499/IMAGE-1.jpg">
                     Meu Projeto 
                </Card>
                <Card src="https://www.hypeness.com.br/1/2018/12/imagens-surreais7.jpg"> 
                    Outro Projeto
                </Card>
                <Card src="https://www.cgtrack.com.br/Adm/Multimidia/ProdutoVarianteFoto/caminhoFoto/mdf_460_494/440.jpg"> 
                    Mais um Projeto 
                </Card>
                <CardDestaque src="https://www.publicitarioscriativos.com/wp-content/uploads/2019/01/Galeria-libera-mais-de-45-mil-imagens-de-obras-de-arte-para-download-gratuito-1100x600.png">
                    Projeto Destaque
                </CardDestaque>
            </CardSection>
        </WrapperProjetosDiv>
    )
}