import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
// import Movies from '../components/Movies';



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  ">
            <div className="container-fluid">
                <div className="row  d-flex align-items-center">
                    <div className="col-4">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} className="logo rounded-circle" alt="logo" />
                        </Link>
                    </div>
                    <div className="col-5">
                        <Link className="navbar-brand" to="/">
                            <span>
                                <span className="live-theatre"> Live Theatre </span>
                            </span>
                        </Link>
                    </div>
                    <div className="col-3">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse col-md" id="navbarNav">
                    <div className="navbar-nav menu">

                        <NavLink className="nav-link  li" exact to="/" data-toggle="collapse" data-target="#navbarNav.show">Home</NavLink>

                        <NavLink className="nav-link li" to="/movies" data-toggle="collapse" data-target="#navbarNav.show">Movies</NavLink>

                        <NavLink className="nav-link li" to="/rental" data-toggle="collapse" data-target="#navbarNav.show">Rental</NavLink>

                        <NavLink className="nav-link li" to="/wishlist" data-toggle="collapse" data-target="#navbarNav.show">Wishlist</NavLink>

                        <NavLink className="nav-link li" to="/login" data-toggle="collapse" data-target="#navbarNav.show">Login</NavLink>

                        <NavLink className="nav-link li" to="/register" data-toggle="collapse" data-target="#navbarNav.show">Register</NavLink>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;