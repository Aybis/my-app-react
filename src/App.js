import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Food from './pages/Food';

function App() {
  return (
    <Router>
    <Navbar></Navbar>
     <Route path="/" exact component={Home}></Route>
     <Route path="/food" component={Food}></Route>
    <Footer></Footer>
    </Router>
  );
}

export default App;
