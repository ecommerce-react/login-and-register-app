import { useState, useEffect } from "react";
import { Login, Register, Homepage, Contact, LoginReg } from "./pages";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setLoginUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    let config = {
      headers: {
        authorization: token,
      },
    };

    axios
      .post("http://localhost:9002/api/v1/user-logged-in", {}, config)
      .then((res) => {
        setLoginUser(res.data.user);

        // Save the token in the local storage
        localStorage.setItem("accessToken", res.data.token);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/LoginReg" element={<LoginReg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
