import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { auth } from '../services/firebase'
import Welcome from '../pages/Welcome';
import Products from '../pages/Products';
import MainHeader from '../components/MainHeader';
import Shortner from '../components/Shortner';

 const Home=({user})=> {
  return (
    <div>
      <MainHeader/>
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
      <Routes>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/" element={<Shortner />}/>
      </Routes>

    </div>
  );
}

export default Home;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component