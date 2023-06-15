import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddVideos from './Components/AddVideo';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addVideos" element={<AddVideos/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
