import React from 'react';
import {Navigation} from './src/navigations/index';
import {ResultContextProvider} from './src/providers/ResultProvider';

const App = () => {
  return (
    <ResultContextProvider>
      <Navigation />
    </ResultContextProvider>
  );
};

export default App;
