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
import GlobalProfile from "./components/Drinks/GlobalProfile/index";
import GlobalProfile2 from "./components/Drinks/GlobalProfile/index2";

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
              <Route path="globalprofile" element={<GlobalProfile/>}/>
              <Route path="globalprofile2" element={<GlobalProfile2/>}/>
              </Route>
            </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
