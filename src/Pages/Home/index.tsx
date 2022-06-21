import CardSuperTrunfo from "../../components/CardSuperTrunfo"
import Wrapper from "../../components/Wrapper"


function Home() {
    
    return (
        <>
            <Wrapper align="center" justify="center" direction="row" height="100vh" style={{gap: '24px'}}>

                <CardSuperTrunfo 
                nome='Fusca Azul' 
                topTag="3A" 
                imageLink="https://tudosobreprodutos.com.br/img/miniatura-metal-carro-antigo-colecao-fusca-azul.png" 
                velocidade={120}
                cilindradas={1200}
                zeroAcem={40}
                potencia={2}
                />

                <CardSuperTrunfo 
                nome='Camaro' 
                topTag="3B" 
                imageLink="https://www.agoramotor.com.br/wp-content/uploads/2021/09/Chevrolet-Camaro-2022-destaque.jpg" 
                velocidade={300}
                cilindradas={5000}
                zeroAcem={4}
                potencia={200}
                />

            </Wrapper>

        </>
    )
}

export default Home