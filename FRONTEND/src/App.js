import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

import Forms from './components/Form';
import Alltasks from './components/Alltasks';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='create' element={<Forms/>}></Route>
        <Route exact path='alltasks' element={<Alltasks/>} ></Route>
        <Route exact path='edit' element={<Edit/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
