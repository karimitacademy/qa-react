import{BrowserRouter, Routes, Route} from "react-router-dom";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import './assets/style/style.css';
import './assets/style/reset.css';
import Resp from "./components/Resp/Resp";
import Pagination from "./components/Pogination/Pogination";

const App = () =>{ 
  

  return ( 
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Content/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  ); 
} 

export default App;