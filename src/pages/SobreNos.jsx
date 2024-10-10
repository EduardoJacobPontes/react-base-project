import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const dados = [
   { 
    titulo:"um titulo de array",
    texto:"um testo grande do array"

   },
   {  
    titulo:"um outro titulo array",
    texto:"um outro testo grande do array"
   },

]
const SobreNos = () => (
    <Base>
        <ListContainer>
       { 
           dados.map( (ele,i) => (
                   <Cartao 
                     key = {i}
                     titulo={ele.titulo}
                     texto={ele.texto}

                    />

           ))      


      }  
      </ListContainer>
           
    </Base>
);

export default SobreNos;