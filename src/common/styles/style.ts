import styled from "@emotion/styled";
import { keyframes } from '@emotion/react'

export const StyledTextContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const openclose = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 285px;
  }
`;

export const HeaderMessage = styled.h1<{windowWidth: number}>`
color: #333;
font-family: tahoma;
font-size: 3rem;
font-weight: 100;
line-height: 1.5;
text-transform: uppercase;
white-space: nowrap;
overflow: hidden;
position: relative;
width: ${({ windowWidth }) => (windowWidth < 700 ? '350px' : '550px')};
margin: 0px 8px;
margin-bottom: 16px;
`

export const MessageSpan = styled.span<{windowWidth: number}>`
font-size: ${({ windowWidth }) => (windowWidth < 700 ? '37px' : '40px')};
`

export const MessageWrapper = styled.div`
display: flex;
  background-color: #333;
  color: #ffffff;
  font-weight: 900;
  overflow: hidden;
  padding-left: 0.5rem;
  top: 0.2rem;
  left: 420px;
  animation: ${openclose} 1s ease-in-out forwards;
`;

export const Message = styled.div`
font-family: tahoma;
`

export const HeaderMessageImage = styled.img<{ show: boolean }>`
  height: 72px;
  position: absolute;
  left: 296px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
