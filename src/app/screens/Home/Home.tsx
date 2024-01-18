import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeContainer, StyledButton, StyledH1, StyledP, StyledSpan } from "./style";

// @ts-expect-error: Ignoring missing module error for logo import
import backgroundImage from '../../../assets/background.jpg'
import { useWindowDimensions } from "../../../common/utils/hooks/useWindowDimensions";


export const Home = () => {
  const navigate = useNavigate();
  const { windowWidth } = useWindowDimensions()
  const sentences = [
    ["Stimulate", "your", "mind"],
    ["with", "the", "latest", "news"]
  ];
  return (
    <HomeContainer backgroundImage={backgroundImage}>
      {sentences.map((words) => (
        <StyledH1 windowWidth={windowWidth}>
          {words.map((word) => (
            <StyledSpan style={{animationDelay: `${0.1 * (words.indexOf(word) + 1)}s`}} key={word}>
              {word}{" "}
            </StyledSpan>
          ))}
          <br />
        </StyledH1>
      ))}
      <StyledButton variant="contained" color="primary" onClick={() => navigate('/login')}>
        Sign in
      </StyledButton>
      <StyledP onClick={() => navigate('/register')}>
        No account? Feel free to Signup
      </StyledP>
    </HomeContainer>
  );
};
