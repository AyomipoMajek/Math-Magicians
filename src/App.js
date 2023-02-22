import { Route, Routes } from 'react-router-dom';
import Calculator from './component/Calculator';
import Home from './component/Home';
import Nav from './component/Nav';
import Quote from './component/Quote';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
