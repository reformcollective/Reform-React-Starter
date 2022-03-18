import React from 'react'
import styled from 'styled-components'

import colors from 'styles/colors'

import Logo from 'assets/images/logo.svg'

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="logo"/>
      <p>Reform React Starter</p>
      <a
        href="https://github.com/reformcollective/component-library"
        target="_blank"
        rel="noopener noreferrer"
      >
        Add more components from here
      </a>
      <a
        href="https://github.com/reformcollective/custom-hooks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Add more hooks from here
      </a>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: sans-serif;

  a {
    color: ${colors.blue};
    margin-bottom: 20px;
  }

  p {
    color: ${colors.pureBlack};
    margin-bottom: 20px;
  }

  img {
    height: 40vmin;
    pointer-events: none;
    margin-bottom: 20px;
  }
`