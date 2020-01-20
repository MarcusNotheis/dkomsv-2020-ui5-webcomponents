import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import StoreDetail from "./detail";
import Home from "./home";

function App() {
  return (
    <ThemeProvider withToastContainer>
      <HashRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/stores/:storeId" component={StoreDetail}/>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
