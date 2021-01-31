import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Naav from './Pages/Naav';
//import Footer from './Pages/Footer';


function App() {
  return (
    <div className="App">

         <Naav/>   
              
      <Switch>
      <Route exact path="/" component ={Home} /> 
      <Route exact path="/about" component ={About} />
      <Route exact path="/service" component ={Service} />
      <Route exact path="/contact" component ={Contact} />
      <Redirect to ="/" /> 

      </Switch> 


    </div>
  );
}

export default App;
