import React from 'react';
import './App.scss';
import routes from './routes';
import Nav from './Components/Nav/Nav';

const App = (props) => {
  return (
    <div className="App">
      <Nav />
      { routes }
    </div>
    );
}

export default App;
