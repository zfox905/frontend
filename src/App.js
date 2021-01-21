import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import 'react-toastify/dist/ReactToastify.css';

import Login from "./components/Login";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Register from "./components/Register";
//import Home from "./components/Home";
//import Profile from "./components/Profile";
//import BoardUser from "./components/BoardUser";
//import BoardModerator from "./components/BoardModerator";
//import BoardAdmin from "./components/BoardAdmin";

import '@elastic/eui/dist/eui_theme_light.css'

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

import Theme from "./components/Header"
import LoginModal from "./components/LoginModal"
import Home from "./components/Home"

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const { message: currentMessage } = useSelector((state) => state.toast);


  const showToast = () => {
    toast("I am Tostify!", { position: toast.POSITION.BOTTOM_RIGHT })
  };

  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      //dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

 useEffect(() => {
  toast(currentMessage, { position: toast.POSITION.BOTTOM_RIGHT })
   // console.log(currentMessage);
    //console.log(currentToast);
 }, [currentMessage]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    
    <Router history={history}>
      
      <Theme theme="dark" />
      
      <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/loginmodal" >
              <LoginModal visible={true} />
              </Route>

            
         
              <button onClick={showToast}>Show Toast !</button>
              <ToastContainer />  
        
    </Router>
    
  );
};

export default App;