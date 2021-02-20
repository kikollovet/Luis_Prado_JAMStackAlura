import Card from '../Card'
import CardDestaque from '../Card/CardDestaque'
import { WrapperProjetosContainer, SectionTitle, CardSection } from './styles'

const projetos = [
    {
        imageSrc: "https://static-cse.canva.com/blob/183499/IMAGE-1.jpg",
        titulo: "Meu Projeto"
    },
    {
        imageSrc: "https://www.hypeness.com.br/1/2018/12/imagens-surreais7.jpg",
        titulo: "Outro Projeto"
    },
    {
        imageSrc: "https://www.cgtrack.com.br/Adm/Multimidia/ProdutoVarianteFoto/caminhoFoto/mdf_460_494/440.jpg",
        titulo: "Mais um Projeto"
    },
]

export default function WrapperProjetos(){
    return(
        <WrapperProjetosContainer>
            <SectionTitle>Meus Projetos</SectionTitle>
            <CardSection>
                {projetos.map((projeto, index) =>(
                    <Card imageSrc={projeto.imageSrc} key={`projeto___${index}`}>
                        {projeto.titulo}
                    </Card>
                ))}
                <CardDestaque
                 imageSrc="https://www.publicitarioscriativos.com/wp-content/uploads/2019/01/Galeria-libera-mais-de-45-mil-imagens-de-obras-de-arte-para-download-gratuito-1100x600.png"
                 description="Meu projeto mais trabalhoso, feito com muito carinho"
                >
                    Projeto Destaque
                </CardDestaque>
            </CardSection>
        </WrapperProjetosContainer>
    )
}