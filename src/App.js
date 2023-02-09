import { useState, useEffect } from "react";

import Login from "./components/Login";
import Home from "./components/Home";
import firebase from "./services/firebase";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setloading(false);
    });
  }, []);

  console.log(user);

  return (
    <div className="app">
      <h1>Welcome to Url shortner</h1>
      {loading ? <h1>Loading</h1> : user ? <Home user={user} /> : <Login />}
    </div>
  );
}

export default App;
