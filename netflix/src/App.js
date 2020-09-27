import React from 'react';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from './containers/footer';
import { FaqsContainer } from './containers/faq';

function App() {
  return (
    <div>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
