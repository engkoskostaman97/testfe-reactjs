import Home from "./component/Home";
import Detail from "./component/Detail";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
