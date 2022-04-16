import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
//import './components/Tuiter/expolore.css'
import './component/search.css'
import SearchScreen from "./component/SeachPage/SearchScreen";
import ResultList from "./component/ResultPage/index";
import {BrowserRouter, Route,Routes} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
                <Route path="/search"
                       element={<SearchScreen/>}/>
                <Route path="/search/:cocktailSearch"
                       element={<SearchScreen/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
