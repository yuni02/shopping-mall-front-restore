import './App.css';
import Header from './Header';
import React, {useEffect} from 'react';
import Home from './home/Home'
import Seller from './seller/Seller'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './checkout/Checkout';
import Detail from './detail/Detail';
<<<<<<< HEAD
=======
import Data from './ProductView/Data';
>>>>>>> 19baeff4b9c23da3c31e99393bff719b0b0a91fd
import Login from './authentication/Login';
import { auth } from './configuration/firebase';
import { useStateValue } from './StateProvider/StateProvider';
import Payment from './payment/Payment'
import Footer from './footer/Footer';
import ImgSlide from './slide/ImgSlide';
<<<<<<< HEAD
import LandingPage from './landingpage/LandingPage';
=======
import Bed from './ProductView/Bed';
>>>>>>> 19baeff4b9c23da3c31e99393bff719b0b0a91fd

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)
<<<<<<< HEAD

      if (authUser) {
        // the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
=======

      if (authUser) {
        // the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

>>>>>>> 19baeff4b9c23da3c31e99393bff719b0b0a91fd

  return (
    //BEM convention
    
    <Router>
      <div className="app">
        <Switch>
<<<<<<< HEAD
      
        <Route path="/landingpage">
        <Header/>
              <LandingPage />
              <Footer/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
=======
            <Route path="/login">
              <Login />
            </Route>

>>>>>>> 19baeff4b9c23da3c31e99393bff719b0b0a91fd
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/bed">
              <Header />
              <Bed />
            </Route>

            <Route path="/detail/:id">
              <Header />
              <Detail />
            </Route>

            <Route path="/payment">
              <Header />
              
              <Payment />
            </Route>
            <Route path="/seller">
              <Seller />
            </Route>
            <Route path="/">
              <Header />
              
                 <ImgSlide/>
              <Home />
              <Footer/>
            </Route>
        </Switch>
      </div>
    </Router>
 );
}

export default App;
