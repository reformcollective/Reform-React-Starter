import React from 'react';
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import Scroll from 'components/Scroll'

import Home from 'pages/Home'

const App: React.FC = () => {
  return (
    <Wrapper>
      <Scroll>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Scroll>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`

`