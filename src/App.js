import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserState from './context/user/UserState';

function App() {
  return (
    <UserState>
      <Router>
        <div>
          <Navbar />
        </div>
        <div className='container'>
          <h1>Hello world</h1>
        </div>
      </Router>
    </UserState>
  );
}

export default App;
