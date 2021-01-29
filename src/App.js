import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Stuff from './Stuff';
import {HashRouter, NavLink, Route} from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>React Router Simple</h1>
        <ul className="App-header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
