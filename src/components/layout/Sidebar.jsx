import React, { useState } from 'react'

export default function Sidebar({ showSideNav, setShowSideNav }) {
    const setShowNav = () => {
        setShowSideNav(!showSideNav)
    }
    return (
        <nav className={`navbar navbar-light navbar-vertical navbar-expand-xl`}>

            {
                showSideNav &&

                <>
                    <div class="d-flex align-items-center">
                        <a class="navbar-brand" href="#">
                            <div class="d-flex align-items-center py-3">
                                <img class="me-2" src="assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" />
                                <span class="font-sans-serif">The Park</span>
                            </div>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
                        <div className="navbar-vertical-content scrollbar">
                            <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                                <li className="nav-item">
                                    <a className="nav-link dropdown-indicator" href="#dashboard" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dashboard">
                                        <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie"></span></span><span className="nav-link-text ps-1">Dashboard</span></div>
                                    </a>
                                    <ul className="nav collapse show" id="dashboard">
                                        <li className="nav-item"><a className="nav-link active" href="index.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Default</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="dashboard/crm.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">CRM</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="dashboard/e-commerce.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">E commerce</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="dashboard/lms.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">LMS</span><span className="badge rounded-pill ms-2 badge-soft-success">New</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="dashboard/project-management.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Management</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                                        <div className="col-auto navbar-vertical-label">Pages</div>
                                        <div className="col ps-0">
                                            <hr className="mb-0 navbar-vertical-divider" />
                                        </div>
                                    </div>


                                    <a className="nav-link dropdown-indicator" href="#user" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="user">
                                        <div className="d-flex align-items-center">
                                            <span className="nav-link-icon">
                                                <span className="fas fa-user"></span>
                                            </span>
                                            <span className="nav-link-text ps-1">User</span>
                                        </div>
                                    </a>

                                    <ul className="nav collapse" id="user">
                                        <li className="nav-item"><a className="nav-link" href="pages/user/profile.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Profile</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/user/settings.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Settings</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                    
                                    <a className="nav-link dropdown-indicator" href="#pricing" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="pricing">
                                        <div className="d-flex align-items-center">
                                            <span className="nav-link-icon">
                                                <span className="fas fa-tags"></span>
                                            </span>
                                            <span className="nav-link-text ps-1">Pricing</span>
                                        </div>
                                    </a>

                                    <ul className="nav collapse" id="pricing">
                                        <li className="nav-item"><a className="nav-link" href="pages/pricing/pricing-default.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Pricing default</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/pricing/pricing-alt.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Pricing alt</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                    
                                    <a className="nav-link dropdown-indicator" href="#faq" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="faq">
                                        <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-question-circle"></span></span><span className="nav-link-text ps-1">Faq</span></div>
                                    </a>
                                    <ul className="nav collapse" id="faq">
                                        <li className="nav-item"><a className="nav-link" href="pages/faq/faq-basic.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Faq basic</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/faq/faq-alt.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Faq alt</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/faq/faq-accordion.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Faq accordion</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                    <a className="nav-link dropdown-indicator" href="#errors" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="errors">
                                        <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-exclamation-triangle"></span></span><span className="nav-link-text ps-1">Errors</span></div>
                                    </a>
                                    <ul className="nav collapse" id="errors">
                                        <li className="nav-item"><a className="nav-link" href="pages/errors/404.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">404</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/errors/500.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">500</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                    
                                </li>
                            </ul> 
                        </div>
                    </div>

                </>
            }

        </nav>
    )
}


