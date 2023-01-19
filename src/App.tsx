import './App.scss';
import {Login} from './componenets/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { SignUp } from './componenets/SignUp';
import { List } from './componenets/List';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/list' element={<List/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
