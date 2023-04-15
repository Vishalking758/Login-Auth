import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import User from './components/User'
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import { LoggedIn } from "./components/LoggedIn";

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}></Route>
  <Route path="/signup" element={<SignUp/>}></Route>
  <Route path="/user" element={<User/>}></Route>
  <Route path="/LoggedIn" element={<LoggedIn/>}></Route>


</Routes>
</BrowserRouter>
      
    </>
  );
}

export default App;
