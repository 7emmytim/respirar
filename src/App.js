import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import SmoothScroll from 'smooth-scroll';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Faqs from './pages/Faqs';
import Footer from './components/Footer';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={About} exact path='/about' />
        <Route component={Movies} exact path='/movies' />
        <Route component={Faqs} exact path='/faqs' />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
