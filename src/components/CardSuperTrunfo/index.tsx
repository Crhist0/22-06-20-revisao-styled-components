import styled from "styled-components";
import Wrapper from "../Wrapper";

type CardProps = {
    inner?: boolean
}

const Card = styled.div<CardProps>`
    padding: ${props=>props.inner ? '8px' : '24px'};
    background-color: ${props=>props.inner ? 'white' : '#c2c2c2'};
    border-radius: ${props=>props.inner ? '48px' : '24px'};
    height: ${props=>props.inner ? '384px' : '400px'};
    width: ${props=>props.inner ? '240px' : '256px'};
`

export default function CardSuperTrunfo() {
    
    return (
        <Wrapper align="center" justify="center" direction="column" height="100vh">
            <Card>
                <Card inner>
                    teste
                </Card>
            </Card>
        </Wrapper>
    )
}
