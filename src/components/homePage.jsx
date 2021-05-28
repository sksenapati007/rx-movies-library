import React from 'react';
// import LoginForm from './loginForm';
import notification from '../images/notifications.png'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row pt-5">
                <div className="col-md-7 rounded notice py-3">
                    <img className="w-100 h-100 rounded" src="https://t3.ftcdn.net/jpg/02/20/14/38/360_F_220143804_fc4xRygvJ8bn8JPQumtHJieDN4ORNyjs.jpg" alt="welcome" />
                </div>
                <div className="col-1"></div>
                <div className="col-md-4 mt-1 rounded text-light notice">
                    {/* <LoginForm /> */}
                    <div className="notify row">
                        <div className="col">
                            <img id="img-notice" className="img-fluid mt-1" src={notification} alt="notice" />
                        </div>
                        <div className="col">
                            <p id="notifications" className="col">
                                <marquee onMouseOver="this.stop();" onMouseOut="this.start();" direction="up" loop="true"
                                    scrollamount="2" height="110px" className="row">
                                    <ul className="">
                                        <li><Link to="/">KGF 2 Official Trailer Released</Link></li>
                                        <br />
                                        <li><Link to="/">Inspector in cinemas now</Link></li>
                                        <br />
                                        <li><Link to="/">Book for two, this friday and get exclusive discounts</Link></li>
                                        <br />
                                        <li><Link to="/">Refer your friends and get free 2 tickets </Link></li>
                                        <br />
                                        <li><Link to="/">Latest movies updated...</Link></li>
                                        <br />
                                    </ul>
                                </marquee>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;