import React from 'react'
import Logo from '../../utils/imgs/logo.png'


const SecondNavbar = () => {
    return (
        <div>
            <header className="p-3 mb-3 border-bottom text-bg-dark ">
                <div className="">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <img src={Logo} height='50'></img>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-white">Home</a></li>
                            <li><a href="#" className="nav-link px-2 text-secondary">Market</a></li>
                            <li><a href="#" className="nav-link px-2 text-secondary">Schemes</a></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="dropdown text-end">
                            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small" >
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default SecondNavbar