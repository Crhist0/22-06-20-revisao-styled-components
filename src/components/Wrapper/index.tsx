import styled from "styled-components";

type WrapperProps = {
    justify?: string
    align?: string
    direction?: string
    height?: string
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: ${props=> props.direction || 'row'};
    justify-content: ${props=> props.justify || 'flex-start'};
    align-items: ${props=> props.align || 'flex-start'};
    height: ${props=> props.height || 'unset'};
`

export default Wrapper