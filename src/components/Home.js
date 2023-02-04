import { Route, Routes } from "react-router-dom";
import React from "react";
import { auth } from "../services/firebase";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import MainHeader from "../components/MainHeader";
import Shortner from "../components/Shortner";
import "./home.css"

const Home = ({ user }) => {
  return (
    <div>
      <MainHeader />
      <div className="sign">
      <h1 >
        Hello, <span></span>
        {user.displayName}
      </h1>
      <img src={user.photoURL} style={{width:"10%"}} alt="" />
      <p></p>
      <button className="button signout" onClick={() => auth.signOut()}>
        Sign out
      </button>
      </div>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Shortner />} />
      </Routes>
    </div>
  );
};

export default Home;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
