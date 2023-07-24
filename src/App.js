
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About'
import NoteState from './context/notes/NoteState';
import { Alert } from './component/Alert';
import Login from './component/Login';
import Signup from './component/Signup';


function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="this is rest time" />

          <div className="container">
            <Routes>
              <Route path='/' element={<Home />}>
              </Route>
              <Route path='/about' element={<About />}>
              </Route>
              <Route path='/login' element={<Login />}>
              </Route>
              <Route path='/signup' element={<Signup />}>
              </Route>
              {/* <Route exact path='/users'>
            <About />
          </Route> */}
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
