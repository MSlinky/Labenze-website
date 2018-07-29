import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Header from "./header";
import Footer from "./footer";

const App = () => {
  return (
    <Router>
      <section>
      <Header />
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
      </section>
    </Router>
  );
};

export default App;