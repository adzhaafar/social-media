import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
// import Profile form "./pages/Profile";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile:username" component={Profile} />
        {/* feed, alert, create post, edit post, login, profile, profileItem, search, signuplogin */}
        
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;

