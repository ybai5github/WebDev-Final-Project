import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './homepage.css';
import Homepage from './components/Drinks/Homepage/index.js'
import Drinks from "./components/Drinks/Drinks";
import Profile from "./components/Drinks/Profile/index.js";
import EditProfile from "./components/Drinks/Profile/EditProfile.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Routes>
            <Route path="/">
              <Route index element={<Homepage/>}/>
              <Route path="home" element={<Homepage/>}/>
              <Route path="drinks" element={<Drinks/>}>
              <Route path="profile" element={<Profile/>}/>
              <Route path="editprofile" element={<EditProfile/>}/>
              </Route>
            </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
