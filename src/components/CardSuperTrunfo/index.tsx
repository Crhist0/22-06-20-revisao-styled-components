import styled from "styled-components";
import Wrapper from "../Wrapper";

type CardProps = {
    inner?: boolean
}

const OuterCard = styled.div<CardProps>`
    padding: ${props=>props.inner ? '8px' : '24px'};
    background-color: ${props=>props.inner ? props.theme.pallet.background : props.theme.pallet.secondary};
    border-radius: ${props=>props.inner ? '48px' : '24px'};
    height: ${props=>props.inner ? '384px' : '400px'};
    width: ${props=>props.inner ? '240px' : '256px'};
    color: ${props => props.theme.pallet.text};
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
`

const InnerCard = styled(OuterCard)`
    height: 384px;
    width: 240px;
    padding: 8px;
    background-color: ${props=>props.theme.pallet.background};
    border-radius: 48px;
    color: ${props => props.theme.pallet.text};
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
`

const CardFooter = styled.p`
text-align: center;
font-weight: bold;
color:  ${props=>props.theme.pallet.text};
`
const LogoFooter = styled.img.attrs({
src: 'https://www.growdev.com.br/assets/images/logo-dark.png',
alt: "logo",
})`
    height: 40px;
    object-fit: cover;
    margin-top: -2px;
  `

const TopLetterWrapper = styled.div`
    border-radius: 50%;
    border: 4px solid white;
    height: 38px;
    width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -12px;
    position: absolute;
`
const TopLetter= styled.div`
    border-radius: 50%;
    border: 4px solid  ${props=>props.theme.pallet.secondary};
    background-color:  ${props=>props.theme.pallet.background};
    color:  ${props=>props.theme.pallet.text};
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -2px;
`

const Imagem = styled.img`
width: 250px ;
height: 150px ;
object-fit: cover;
border-radius: 48px;
`

const Title = styled.p`
text-align: center;
font-weight: bold;
font-size: large;
width: 100%;
border-radius: 8px;
padding: 4px 0px;
background-color:  ${props=>props.theme.pallet.secondary};
color:  ${props=>props.theme.pallet.text};

`

const DivAtributos = styled.div<{inner?:boolean, even?: boolean}>`
display: flex;
align-items: center;
width: ${props=>props.inner ? 'unset' : '100%'} ;
justify-content: ${props=>props.inner ? 'center' : 'space-between'} ;
background-color: ${props=>props.even ? props.theme.pallet.secondary : props.theme.pallet.background} ;
border-radius: 8px;
padding: 0px 2px;
height: 24px;
`

const Icon = styled.img`
height: 20px;
margin-right: 4px;
`

const AtributoNome = styled.p`
font-size: small;
`
const AtributoValor = styled.p`
font-size: small;
`

type Car = {
    nome: string
    topTag: string
    imageLink: string
    velocidade: number
    cilindradas: number
    zeroAcem: number
    potencia: number
}
export default function CardSuperTrunfo(props:Car) {
    
    return (
            <OuterCard>
                <InnerCard>
                    <TopLetterWrapper>
                        <TopLetter>{props.topTag}</TopLetter>
                    </TopLetterWrapper>
                    <Wrapper style={{borderRadius: '48px'}} align="center" justify="space-between" direction="column" height="100%">
                        <Imagem src={props.imageLink}/>
                        <Title>{props.nome}</Title>
                        <DivAtributos>
                            <DivAtributos inner>
                                <Icon src='https://img.icons8.com/fluency-systems-filled/452/chart-bar.png'></Icon>
                                <AtributoNome>Velocidade máxima</AtributoNome>
                            </DivAtributos>
                            <AtributoValor>{props.velocidade} KM/H</AtributoValor>
                        </DivAtributos>
                        <DivAtributos even>
                            <DivAtributos inner even >
                                <Icon src='https://img.icons8.com/metro/452/scuba-pressure-gauge.png'></Icon>
                                <AtributoNome>Cilindradas</AtributoNome>
                            </DivAtributos>
                            <AtributoValor>{props.cilindradas} CC</AtributoValor>
                        </DivAtributos>
                        <DivAtributos>
                            <DivAtributos inner>
                                <Icon src='https://img.icons8.com/material-rounded/344/speedometer.png'></Icon>
                                <AtributoNome>0 à 100</AtributoNome>
                            </DivAtributos>
                            <AtributoValor>{props.zeroAcem} S</AtributoValor>
                        </DivAtributos>
                        <DivAtributos even>
                            <DivAtributos inner even >
                                <Icon src='https://img.icons8.com/external-kmg-design-glyph-kmg-design/344/external-thunder-weather-kmg-design-glyph-kmg-design.png'></Icon>
                                <AtributoNome>Potência</AtributoNome>
                            </DivAtributos>
                            <AtributoValor>{props.potencia} CV</AtributoValor>
                        </DivAtributos>
                        <div style={{display: 'flex', marginTop: '8px'}}>
                            <CardFooter>Super Trunfo </CardFooter>
                            <LogoFooter/>
                        </div>
                    </Wrapper>
                </InnerCard>
            </OuterCard>
    )
}
