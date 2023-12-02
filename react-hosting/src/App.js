//App.js 
import React, { useEffect }  from 'react';

// js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery.easing/jquery.easing.min.js';

import { Route, Link, Routes } from "react-router-dom";

//routing components
import Home from "./page/Home";
import Router1 from "./page/Router1";
import Router2 from "./page/Router2";

// styles
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function App() {
  useEffect(() => {
    // Custom scripts for all pages
    //$.getScript('js/sb-admin-2.min.js');
    //$.getScript('js/sb-admin-2.js');

  }, []); // Run this effect only once on component mount

  return (
    <Container>
      <div id="page-top">
      <div id="wrapper">

      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <li className="nav-item">
            <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>머신러닝</span>
            </Link>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>
      </ul>


      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                  <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Earnings (Monthly)</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                      </div>
                      <div className="col-auto">
                          <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                  </div>
              </div>
          </div>
      </div>

        </div>
      </div>


      <div classNameName="App">
      <header classNameName="App-header">

        <div>
        <p>
        <Button as="a" variant="primary">
          Button as link
        </Button>
          <Link to="/">홈</Link>
        </p>
        <p>
          <Link to="/r1">Router1</Link>
        </p>
        <p>
          <Link to="/r2">Router2</Link>
        </p>
        </div>

        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/r1" element={<Router1 />} />
          <Route path="/r2" element={<Router2 />} />
        </Routes>
        </div>
      </header>
    </div>
    </div>
    </div>
    </Container>
  );
}

export default App;
