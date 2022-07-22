import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/homePage';
import Login from './components/loginAndRegestration/login/login';
import Regestration from './components/loginAndRegestration/regestration/regestration';
import Workspace from './components/workspace/workspace';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/regestration' element={<Regestration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/workspace' element={<Workspace />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
