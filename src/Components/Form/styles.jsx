import styled from 'styled-components';

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
width: 380px;
`

export const Child = styled.div`
    ${props => props.$isGoogleButton && `
        display: flex;
        justify-content: space-between;
    `}
`