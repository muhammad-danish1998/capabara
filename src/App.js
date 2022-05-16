import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Features from "./components/Features"
import Signup from "./components/Signup"
import Templates from "./components/Templates"
import Home from './Home.js/Home';
import Error from './components/Error';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{backgroundColor:"#E5E5E5"}}>
      <MainNavbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/features' component={Features} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/template' component={Templates} />
        <Route path='*' exact={true} component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
