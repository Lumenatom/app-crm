import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';
import Login from './components/loginAndRegestration/login/login';
import Regestration from './components/loginAndRegestration/regestration/regestration';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/regestration' element={<Regestration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
