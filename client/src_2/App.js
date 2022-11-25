// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Settings from './Pages/Home/Setting';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import TopBar from './TopBar/TopBar';
import { Context } from "./contexts/Context";
import { useContext } from "react";

function App() {
  // const { currentUser } = useContext(Context);
  const currentUser = true;
  return ( <div className = "App"> blog app lorem </div> );
    // <Router>
    //   <TopBar />
    //   <Routes>
    //     <Route exact path="/"element={<Single/>}/>
    //     <Route exact path="/register" element = {currentUser ? <Home /> : <Register />}/>
    //     <Route exact path="/posts" element={<Home/>}> <Home />
    //     </Route>
    //     <Route path="/register">{currentUser ? <Home /> : <Register />}
    //     </Route>
    //     <Route path="/login">{currentUser ? <Home /> : <Login />}
    //     </Route>
    //     <Route path="/post/:id"> <Single />
    //     </Route>
    //     <Route path="/write">{currentUser ? <Write /> : <Login />}
    //     </Route>
    //     <Route path="/settings">{currentUser ? <Settings /> : <Login />}
    //     </Route>
    //   </Routes>
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch> */}

    // </Router>
    
  
}

export default App;
