
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'
import { Button } from "@mui/material";


const fadeIn = keyframes`
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

const scale = keyframes`
  100% {
    transform: scale(1);
  }
`;

export const HomeContainer = styled.div<{backgroundImage: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 93vh;
  width: 100vw;
`;
export const StyledH1 = styled.h1<{windowWidth: number}>`
  max-width: 40ch;
  text-align: center;
  transform: scale(0.94);
  animation: ${scale} 3s forwards cubic-bezier(0.5, 1, 0.89, 1);

  color: #ffffff;
    font-family: tahoma;
    font-size: ${({windowWidth}) => windowWidth < 700 ? '1.8rem' : "3rem"};
    font-weight: 100;
    line-height: 1.5;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    margin: 0px 8px;
`;

export const StyledSpan = styled.span`
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
  margin-right: 18px;
  animation: ${fadeIn} 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);

  
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export const StyledP = styled.p`
  font-family: tahoma;
  color: #ffffff;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
`;