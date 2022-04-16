import './App.css';
import '../src/vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap-5.1.3-dist/bootstrap.min.css';
import '../src/vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DetailScreen from "./components/detail-screen";
import reviewsReducer from "./reducer/reviews-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";


const store = createStore(reviewsReducer);

function App() {
  return (
      <Provider store = {store}>

          <BrowserRouter>
              <div className="container">
                  <Routes>
                      <Route path="/detail/:imdbID" exact={true} element={<DetailScreen/>}/>
                  </Routes>
              </div>
          </BrowserRouter>

      </Provider>

  );
}



export default App;
