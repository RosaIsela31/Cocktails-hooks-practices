import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Container from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Container} />
    </BrowserRouter>
  );
}

export default App;
