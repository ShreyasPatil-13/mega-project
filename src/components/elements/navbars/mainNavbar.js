import React from 'react'
import Logo from '../../../utils/imgs/logo.png'
import * as Icon from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const MainNavbar = () => {

    return (
        <div>
            <header className="p-1 text-bg-dark">
                <div className="">
                    <nav className="navbar navbar-expand-lg shadow-0 ">
                        <a href="/" className="navbar-brand">
                            <img src={Logo} height='60' alt='logo' />
                        </a>


                        <button
                            className="navbar-toggler text-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <Icon.MenuButtonWide />
                        </button>

                        <div className='collapse navbar-collapse' id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link px-2 text-secondary">
                                        Overview
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link px-2 text-white">
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/faq" className="nav-link px-2 text-white">
                                        FAQs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/about" className="nav-link px-2 text-white">
                                        About
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex mb-2 mb-lg-0">
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-secondary text-light input-group-text"><Icon.Search /></button>
                                </div>

                            </form>

                            <div className="ms-lg-3">
                                <Link to='/signin' type="button" className="btn btn-outline-light me-2">
                                    Login
                                </Link>
                                <Link to='/signup' type="button" className="btn btn-success">
                                    Sign-up
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>


        </div>
    )
}

export default MainNavbar
