import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Skills from './components/layout/Skills';
import AlertState from './context/alert/AlertState';
import UserState from './context/user/UserState';

function App() {
  return (
    <UserState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
          </div>
          <div className='container'>
            <Skills />
          </div>
        </Router>
      </AlertState>
    </UserState>
  );
}

export default App;
