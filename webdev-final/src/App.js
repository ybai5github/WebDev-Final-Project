import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './homepage.css';
import Homepage from './components/Drinks/Homepage/index.js'
import Drinks from "./components/Drinks/Drinks";
import Profile from "./components/Drinks/Profile/index.js";
import EditProfile from "./components/Drinks/Profile/EditProfile.js";
import EditProfileBob from "./components/Drinks/ProfileBob/EditProfileBob";
import EditProfileCharlie from"./components/Drinks/ProfileCharlie/EditProfileCharlie"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalProfile from "./components/Drinks/GlobalProfile/index";
import GlobalProfile2 from "./components/Drinks/GlobalProfile2/index2";
import GlobalProfile3 from "./components/Drinks/GlobalProfile3/index3";
import ProfileBob from "./components/Drinks/ProfileBob/indexbob";
import ProfileCharlie
  from "./components/Drinks/ProfileCharlie/indexcharlie";

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
              <Route path ="profilebob" element={<ProfileBob/>}/>
              <Route path="profilecharlie" element={<ProfileCharlie/>}/>
              <Route path="editprofile" element={<EditProfile/>}/>
              <Route path="editprofilebob" element={<EditProfileBob/>}/>
              <Route path="editprofilecharlie" element={<EditProfileCharlie/>}/>
              <Route path="globalprofile/:_id" element={<GlobalProfile/>}/>
              <Route path="globalprofile2/:_id" element={<GlobalProfile2/>}/>
                <Route path="globalprofile3/:_id" element={<GlobalProfile3/>}/>
              </Route>
            </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
