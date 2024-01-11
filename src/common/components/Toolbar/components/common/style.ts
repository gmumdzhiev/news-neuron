import styled from "@emotion/styled";

export const StyledLogo = styled.img<{windowWidth: number}>`
    height: ${({ windowWidth }) => (windowWidth < 700 ? '25px' : '50px')};
`
