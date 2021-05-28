import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Rental from './components/rental';
import NotFound from './components/notFound';
import LiveTheatre from './components/liveTheatre';
import NavBar from './components/navBar';
import HomePage from './components/homePage';
import RegisterForm from './components/registerForm';
import WatchList from './components/watchlist';
import LoginForm from './components/loginForm';
import MovieForm from './components/movieForm';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <ToastContainer/>
        <div className="row ">
          <div className="col navlist ">
            <NavBar />
          </div>
        </div>
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" render={() => <LoginForm />} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={LiveTheatre} />
          <Route exact path="/rental" render={() => <Rental />} />
          <Route exact path="/wishlist" component={WatchList} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect exact to="/" from="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;