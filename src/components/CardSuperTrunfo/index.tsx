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

export default function CardSuperTrunfo() {
    
    return (
        <Wrapper align="center" justify="center" direction="column" height="100vh">
            <OuterCard>
                <InnerCard>
                    teste
                </InnerCard>
            </OuterCard>
        </Wrapper>
    )
}
