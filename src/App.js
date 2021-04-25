import { Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Naav from './Pages/Naav';
import NotFound from './Pages/NotFound'
//import Footer from './Pages/Footer';


function App() {
  return (
    <div className="App">

         <Naav/>   
              
      <Switch>
      <Route exact path="/" component ={Home} /> 
      <Route path="/home" component ={Home} /> 
      <Route path="/about" component ={About} />
      <Route path="/service" component ={Service} />
      <Route path="/contact" component ={Contact} />
      <Route path="/*" component ={NotFound} />

      </Switch> 


    </div>
  );
}

export default App;
