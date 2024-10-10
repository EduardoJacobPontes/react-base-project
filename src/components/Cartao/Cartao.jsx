import { Container, Texto, Titulo } from "./Style";



const Cartao = ( props ) => (
    <Container>
        <Titulo> {props . titulo}</Titulo>
        <Texto> um texto que deveria ser grande</Texto>

    </Container>
);
export default Cartao;