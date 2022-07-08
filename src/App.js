import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Create/Create';
import Todo from './components/Todo/Todo';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test/Test'
import Signup from './components/Sign up/Signup';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Test />} />
          <Route path='/create' element={<Create />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
