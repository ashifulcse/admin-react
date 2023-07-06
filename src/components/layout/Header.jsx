import React, { useState } from 'react'

export default function Header({showSideNav, setShowSideNav}) {

    const setShowNav = () =>{
        setShowSideNav(!showSideNav)
    }

    return (
        <>

            <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg" data-double-top-nav="data-double-top-nav" style={{ display: "none" }}>
                <div className="w-100">
                    <div className="d-flex flex-between-center">
                        <button className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDoubleTop" aria-controls="navbarDoubleTop" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                        <a className="navbar-brand me-1 me-sm-3" href="index.html">
                            <div className="d-flex align-items-center"><img className="me-2" src="assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" /><span className="font-sans-serif">falcon</span></div>
                        </a>
                        <ul className="navbar-nav align-items-center d-none d-lg-block">
                            <li className="nav-item">
                                <div className="search-box" data-list='{"valueNames":["title"]}'>
                                    <form className="position-relative" data-bs-toggle="search" data-bs-display="static"><input className="form-control search-input fuzzy-search" type="search" placeholder="Search..." aria-label="Search" />
                                        <span className="fas fa-search search-box-icon"></span>
                                    </form>
                                    <div className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none" data-bs-dismiss="search"><button className="btn btn-link btn-close-falcon p-0" aria-label="Close"></button></div>
                                    <div className="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
                                        <div className="scrollbar list py-3" style={{ maxHeight: "24rem" }}>
                                            <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs--2 pt-0 pb-2">Recently Browsed</h6><a className="dropdown-item fs--1 px-x1 py-1 hover-primary" href="app/events/event-detail.html">
                                                <div className="d-flex align-items-center">
                                                    <span className="fas fa-circle me-2 text-300 fs--2"></span>
                                                    <div className="fw-normal title">Pages <span className="fas fa-chevron-right mx-1 text-500 fs--2" data-fa-transform="shrink-2"></span> Events</div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item fs--1 px-x1 py-1 hover-primary" href="app/e-commerce/customers.html">
                                                <div className="d-flex align-items-center">
                                                    <span className="fas fa-circle me-2 text-300 fs--2"></span>
                                                    <div className="fw-normal title">E-commerce <span className="fas fa-chevron-right mx-1 text-500 fs--2" data-fa-transform="shrink-2"></span> Customers</div>
                                                </div>
                                            </a>
                                            <hr className="text-200 dark__text-900" />
                                            <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs--2 pt-0 pb-2">Suggested Filter</h6><a className="dropdown-item px-x1 py-1 fs-0" href="app/e-commerce/customers.html">
                                                <div className="d-flex align-items-center"><span className="badge fw-medium text-decoration-none me-2 badge-soft-warning">customers:</span>
                                                    <div className="flex-1 fs--1 title">All customers list</div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item px-x1 py-1 fs-0" href="app/events/event-detail.html">
                                                <div className="d-flex align-items-center"><span className="badge fw-medium text-decoration-none me-2 badge-soft-success">events:</span>
                                                    <div className="flex-1 fs--1 title">Latest events in current month</div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item px-x1 py-1 fs-0" href="app/e-commerce/product/product-grid.html">
                                                <div className="d-flex align-items-center"><span className="badge fw-medium text-decoration-none me-2 badge-soft-info">products:</span>
                                                    <div className="flex-1 fs--1 title">Most popular products</div>
                                                </div>
                                            </a>
                                            <hr className="text-200 dark__text-900" />
                                            <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs--2 pt-0 pb-2">Files</h6><a className="dropdown-item px-x1 py-2" href="#!">
                                                <div className="d-flex align-items-center">
                                                    <div className="file-thumbnail me-2"><img className="border h-100 w-100 fit-cover rounded-3" src="assets/img/products/3-thumb.png" alt="" /></div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-0 title">iPhone</h6>
                                                        <p className="fs--2 mb-0 d-flex"><span className="fw-semi-bold">Antony</span><span className="fw-medium text-600 ms-2">27 Sep at 10:30 AM</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item px-x1 py-2" href="#!">
                                                <div className="d-flex align-items-center">
                                                    <div className="file-thumbnail me-2"><img className="img-fluid" src="assets/img/icons/zip.png" alt="" /></div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-0 title">Falcon v1.8.2</h6>
                                                        <p className="fs--2 mb-0 d-flex"><span className="fw-semi-bold">John</span><span className="fw-medium text-600 ms-2">30 Sep at 12:30 PM</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                            <hr className="text-200 dark__text-900" />
                                            <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs--2 pt-0 pb-2">Members</h6><a className="dropdown-item px-x1 py-2" href="pages/user/profile.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-l status-online me-2">
                                                        <img className="rounded-circle" src="assets/img/team/1.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-0 title">Anna Karinina</h6>
                                                        <p className="fs--2 mb-0 d-flex">Technext Limited</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item px-x1 py-2" href="pages/user/profile.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-l me-2">
                                                        <img className="rounded-circle" src="assets/img/team/2.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-0 title">Antony Hopkins</h6>
                                                        <p className="fs--2 mb-0 d-flex">Brain Trust</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item px-x1 py-2" href="pages/user/profile.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-l me-2">
                                                        <img className="rounded-circle" src="assets/img/team/3.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-0 title">Emma Watson</h6>
                                                        <p className="fs--2 mb-0 d-flex">Google</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="text-center mt-n3">
                                            <p className="fallback fw-bold fs-1 d-none">No Result Found.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
                            <li className="nav-item">
                                <div className="theme-control-toggle fa-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span className="fas fa-sun fs-0"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span className="fas fa-moon fs-0"></span></label></div>
                            </li>
                            <li className="nav-item d-none d-sm-block">
                                <a className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait" href="app/e-commerce/shopping-cart.html"><span className="fas fa-shopping-cart" data-fa-transform="shrink-7" style={{ fontSize: "33px" }}></span><span className="notification-indicator-number">1</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait" id="navbarDropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll"><span className="fas fa-bell" data-fa-transform="shrink-6" style={{ fontSize: "33px" }}></span></a>
                                <div className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg" aria-labelledby="navbarDropdownNotification">
                                    <div className="card card-notification shadow-none">
                                        <div className="card-header">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-auto">
                                                    <h6 className="card-header-title mb-0">Notifications</h6>
                                                </div>
                                                <div className="col-auto ps-0 ps-sm-3"><a className="card-link fw-normal" href="#">Mark all as read</a></div>
                                            </div>
                                        </div>
                                        <div className="scrollbar-overlay" style={{ maxHeight: "19rem" }}>
                                            <div className="list-group list-group-flush fw-normal fs--1">
                                                <div className="list-group-title border-bottom">NEW</div>
                                                <div className="list-group-item">
                                                    <a className="notification notification-flush notification-unread" href="#!">
                                                        <div className="notification-avatar">
                                                            <div className="avatar avatar-2xl me-3">
                                                                <img className="rounded-circle" src="assets/img/team/1-thumb.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="notification-body">
                                                            <p className="mb-1"><strong>Emma Watson</strong> replied to your comment : "Hello world 😍"</p>
                                                            <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">💬</span>Just now</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="list-group-item">
                                                    <a className="notification notification-flush notification-unread" href="#!">
                                                        <div className="notification-avatar">
                                                            <div className="avatar avatar-2xl me-3">
                                                                <div className="avatar-name rounded-circle"><span>AB</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="notification-body">
                                                            <p className="mb-1"><strong>Albert Brooks</strong> reacted to <strong>Mia Khalifa's</strong> status</p>
                                                            <span className="notification-time"><span className="me-2 fab fa-gratipay text-danger"></span>9hr</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="list-group-title border-bottom">EARLIER</div>
                                                <div className="list-group-item">
                                                    <a className="notification notification-flush" href="#!">
                                                        <div className="notification-avatar">
                                                            <div className="avatar avatar-2xl me-3">
                                                                <img className="rounded-circle" src="assets/img/icons/weather-sm.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="notification-body">
                                                            <p className="mb-1">The forecast today shows a low of 20&#8451; in California. See today's weather.</p>
                                                            <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">🌤️</span>1d</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="list-group-item">
                                                    <a className="border-bottom-0 notification-unread  notification notification-flush" href="#!">
                                                        <div className="notification-avatar">
                                                            <div className="avatar avatar-xl me-3">
                                                                <img className="rounded-circle" src="assets/img/logos/oxford.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="notification-body">
                                                            <p className="mb-1"><strong>University of Oxford</strong> created an event : "Causal Inference Hilary 2019"</p>
                                                            <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">✌️</span>1w</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="list-group-item">
                                                    <a className="border-bottom-0 notification notification-flush" href="#!">
                                                        <div className="notification-avatar">
                                                            <div className="avatar avatar-xl me-3">
                                                                <img className="rounded-circle" src="assets/img/team/10.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="notification-body">
                                                            <p className="mb-1"><strong>James Cameron</strong> invited to join the group: United Nations International Children's Fund</p>
                                                            <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">🙋‍</span>2d</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-center border-top"><a className="card-link d-block" href="app/social/notifications.html">View all</a></div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown px-1">
                                <a className="nav-link fa-icon-wait nine-dots p-1" id="navbarDropdownMenu" role="button" data-hide-on-body-scroll="data-hide-on-body-scroll" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="43" viewBox="0 0 16 16" fill="none">
                                    <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
                                    <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
                                    <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
                                    <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
                                    <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
                                    <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
                                    <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
                                    <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
                                    <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
                                </svg></a>
                                <div className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg" aria-labelledby="navbarDropdownMenu">
                                    <div className="card shadow-none">
                                        <div className="scrollbar-overlay nine-dots-dropdown">
                                            <div className="card-body px-3">
                                                <div className="row text-center gx-0 gy-0">
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="pages/user/profile.html" target="_blank">
                                                        <div className="avatar avatar-2xl"> <img className="rounded-circle" src="assets/img/team/3.jpg" alt="" /></div>
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2">Account</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="https://themewagon.com/" target="_blank"><img className="rounded" src="assets/img/nav-icons/themewagon.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Themewagon</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="https://mailbluster.com/" target="_blank"><img className="rounded" src="assets/img/nav-icons/mailbluster.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Mailbluster</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/google.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Google</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/spotify.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Spotify</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/steam.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Steam</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/github-light.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Github</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/discord.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Discord</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/xbox.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">xbox</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/trello.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Kanban</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/hp.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Hp</p>
                                                    </a></div>
                                                    <div className="col-12">
                                                        <hr className="my-3 mx-n3 bg-200" />
                                                    </div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/linkedin.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Linkedin</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/twitter.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Twitter</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/facebook.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Facebook</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/instagram.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Instagram</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/pinterest.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Pinterest</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/slack.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Slack</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/deviantart.png" alt="" width="40" height="40" />
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Deviantart</p>
                                                    </a></div>
                                                    <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="app/events/event-detail.html" target="_blank">
                                                        <div className="avatar avatar-2xl">
                                                            <div className="avatar-name rounded-circle bg-soft-primary text-primary"><span className="fs-2">E</span></div>
                                                        </div>
                                                        <p className="mb-0 fw-medium text-800 text-truncate fs--2">Events</p>
                                                    </a></div>
                                                    <div className="col-12"><a className="btn btn-outline-primary btn-sm mt-4" href="#!">Show more</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link pe-0 ps-2" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="avatar avatar-xl">
                                    <img className="rounded-circle" src="assets/img/team/3-thumb.png" alt="" />
                                </div>
                            </a>
                                <div className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                                    <div className="bg-white dark__bg-1000 rounded-2 py-2">
                                        <a className="dropdown-item fw-bold text-warning" href="#!"><span className="fas fa-crown me-1"></span><span>Go Pro</span></a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">Set status</a>
                                        <a className="dropdown-item" href="pages/user/profile.html">Profile &amp; account</a>
                                        <a className="dropdown-item" href="#!">Feedback</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="pages/user/settings.html">Settings</a>
                                        <a className="dropdown-item" href="pages/authentication/card/logout.html">Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-2 d-none d-lg-block" />
                    <div className="collapse navbar-collapse scrollbar py-lg-2" id="navbarDoubleTop">
                        <ul className="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dashboards">Dashboard</a>
                                <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                                    <div className="bg-white dark__bg-1000 rounded-3 py-2"><a className="dropdown-item link-600 fw-medium" href="index.html">Default</a><a className="dropdown-item link-600 fw-medium" href="dashboard/analytics.html">Analytics</a><a className="dropdown-item link-600 fw-medium" href="dashboard/crm.html">CRM</a><a className="dropdown-item link-600 fw-medium" href="dashboard/e-commerce.html">E commerce</a><a className="dropdown-item link-600 fw-medium" href="dashboard/lms.html">LMS<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="dropdown-item link-600 fw-medium" href="dashboard/project-management.html">Management</a><a className="dropdown-item link-600 fw-medium" href="dashboard/saas.html">SaaS</a><a className="dropdown-item link-600 fw-medium" href="dashboard/support-desk.html">Support desk<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a></div>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="apps">App</a>
                                <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="apps">
                                    <div className="card navbar-card-app shadow-none dark__bg-1000">
                                        <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="assets/img/icons/spot-illustrations/authentication-corner.png" width="130" alt="" />
                                            <div className="row">
                                                <div className="col-6 col-md-4">
                                                    <div className="nav flex-column"><a className="nav-link py-1 link-600 fw-medium" href="app/calendar.html">Calendar</a><a className="nav-link py-1 link-600 fw-medium" href="app/chat.html">Chat</a><a className="nav-link py-1 link-600 fw-medium" href="app/kanban.html">Kanban</a>
                                                        <p className="nav-link text-700 mb-0 fw-bold">Social</p><a className="nav-link py-1 link-600 fw-medium" href="app/social/feed.html">Feed</a><a className="nav-link py-1 link-600 fw-medium" href="app/social/activity-log.html">Activity log</a><a className="nav-link py-1 link-600 fw-medium" href="app/social/notifications.html">Notifications</a><a className="nav-link py-1 link-600 fw-medium" href="app/social/followers.html">Followers</a>
                                                        <p className="nav-link text-700 mb-0 fw-bold">Support Desk</p><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/table-view.html">Table view</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/card-view.html">Card view</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/contacts.html">Contacts</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/contact-details.html">Contact details</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/tickets-preview.html">Tickets preview</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/quick-links.html">Quick links</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/reports.html">Reports</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-md-4">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">E-Learning</p><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/course/course-list.html">Course list</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/course/course-grid.html">Course grid</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/course/course-details.html">Course details</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/course/create-a-course.html">Create a course</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/student-overview.html">Student overview</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/trainer-profile.html">Trainer profile</a>
                                                        <p className="nav-link text-700 mb-0 fw-bold">Events</p><a className="nav-link py-1 link-600 fw-medium" href="app/events/create-an-event.html">Create an event</a><a className="nav-link py-1 link-600 fw-medium" href="app/events/event-detail.html">Event detail</a><a className="nav-link py-1 link-600 fw-medium" href="app/events/event-list.html">Event list</a>
                                                        <p className="nav-link text-700 mb-0 fw-bold">Email</p><a className="nav-link py-1 link-600 fw-medium" href="app/email/inbox.html">Inbox</a><a className="nav-link py-1 link-600 fw-medium" href="app/email/email-detail.html">Email detail</a><a className="nav-link py-1 link-600 fw-medium" href="app/email/compose.html">Compose</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-md-4">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">E-Commerce</p><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/product/product-list.html">Product list</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/product/product-grid.html">Product grid</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/product/product-details.html">Product details</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/orders/order-list.html">Order list</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/orders/order-details.html">Order details</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/customers.html">Customers</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/customer-details.html">Customer details</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/shopping-cart.html">Shopping cart</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/checkout.html">Checkout</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/billing.html">Billing</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/invoice.html">Invoice</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="pagess">Pages</a>
                                <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="pagess">
                                    <div className="card navbar-card-pages shadow-none dark__bg-1000">
                                        <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="assets/img/icons/spot-illustrations/authentication-corner.png" width="130" alt="" />
                                            <div className="row">
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Simple Auth</p><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/forgot-password.html">Forgot password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/confirm-mail.html">Confirm mail</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/reset-password.html">Reset password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/lock-screen.html">Lock screen</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Card Auth</p><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/forgot-password.html">Forgot password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/confirm-mail.html">Confirm mail</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/reset-password.html">Reset password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/lock-screen.html">Lock screen</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Split Auth</p><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/forgot-password.html">Forgot password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/confirm-mail.html">Confirm mail</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/reset-password.html">Reset password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/lock-screen.html">Lock screen</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Layouts</p><a className="nav-link py-1 link-600 fw-medium" href="demo/navbar-vertical.html">Navbar vertical</a><a className="nav-link py-1 link-600 fw-medium" href="demo/navbar-top.html">Top nav</a><a className="nav-link py-1 link-600 fw-medium" href="demo/navbar-double-top.html">Double top<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="demo/combo-nav.html">Combo nav</a>
                                                        <p className="nav-link text-700 mb-0 fw-bold">Others</p><a className="nav-link py-1 link-600 fw-medium" href="pages/starter.html">Starter</a><a className="nav-link py-1 link-600 fw-medium" href="pages/landing.html">Landing</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">User</p><a className="nav-link py-1 link-600 fw-medium" href="pages/user/profile.html">Profile</a><a className="nav-link py-1 link-600 fw-medium" href="pages/user/settings.html">Settings</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Pricing</p><a className="nav-link py-1 link-600 fw-medium" href="pages/pricing/pricing-default.html">Pricing default</a><a className="nav-link py-1 link-600 fw-medium" href="pages/pricing/pricing-alt.html">Pricing alt</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Errors</p><a className="nav-link py-1 link-600 fw-medium" href="pages/errors/404.html">404</a><a className="nav-link py-1 link-600 fw-medium" href="pages/errors/500.html">500</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Miscellaneous</p><a className="nav-link py-1 link-600 fw-medium" href="pages/miscellaneous/associations.html">Associations</a><a className="nav-link py-1 link-600 fw-medium" href="pages/miscellaneous/invite-people.html">Invite people</a><a className="nav-link py-1 link-600 fw-medium" href="pages/miscellaneous/privacy-policy.html">Privacy policy</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">FAQ</p><a className="nav-link py-1 link-600 fw-medium" href="pages/faq/faq-basic.html">Faq basic</a><a className="nav-link py-1 link-600 fw-medium" href="pages/faq/faq-alt.html">Faq alt</a><a className="nav-link py-1 link-600 fw-medium" href="pages/faq/faq-accordion.html">Faq accordion</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Other Auth</p><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/wizard.html">Wizard</a><a className="nav-link py-1 link-600 fw-medium" href="#authentication-modal" data-bs-toggle="modal">Modal</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="moduless">Modules</a>
                                <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="moduless">
                                    <div className="card navbar-card-components shadow-none dark__bg-1000">
                                        <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="assets/img/icons/spot-illustrations/authentication-corner.png" width="130" alt="" />
                                            <div className="row">
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Components</p><a className="nav-link py-1 link-600 fw-medium" href="modules/maps/google-map.html">Google map</a><a className="nav-link py-1 link-600 fw-medium" href="modules/maps/leaflet-map.html">Leaflet map</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/accordion.html">Accordion</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/alerts.html">Alerts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/anchor.html">Anchor</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/animated-icons.html">Animated icons</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/background.html">Background</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/badges.html">Badges</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/bottom-bar.html">Bottom bar<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/breadcrumbs.html">Breadcrumbs</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/buttons.html">Buttons</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/calendar.html">Calendar</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column mt-md-4 pt-md-1"><a className="nav-link py-1 link-600 fw-medium" href="modules/components/cards.html">Cards</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/carousel/bootstrap.html">Bootstrap carousel</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/carousel/swiper.html">Swiper</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/collapse.html">Collapse</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/cookie-notice.html">Cookie notice</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/countup.html">Countup</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/draggable.html">Draggable</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/dropdowns.html">Dropdowns</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/jquery-components.html">Jquery<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/list-group.html">List group</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/modals.html">Modals</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/navs.html">Navs</a></div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column mt-xxl-4 pt-xxl-1"><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/vertical-navbar.html">Navbar vertical</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/top-navbar.html">Top nav</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/double-top-navbar.html">Double top<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/combo-navbar.html">Combo nav</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/offcanvas.html">Offcanvas</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/avatar.html">Avatar</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/images.html">Images</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/figures.html">Figures</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/hoverbox.html">Hoverbox</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/lightbox.html">Lightbox</a></div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column mt-xxl-4 pt-xxl-1"><a className="nav-link py-1 link-600 fw-medium" href="modules/components/progress-bar.html">Progress bar</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/placeholder.html">Placeholder</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pagination.html">Pagination</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/popovers.html">Popovers</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/scrollspy.html">Scrollspy</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/search.html">Search</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/spinners.html">Spinners</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/timeline.html">Timeline</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/toasts.html">Toasts</a></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Forms</p><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/form-control.html">Form control</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/input-group.html">Input group</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/select.html">Select</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/checks.html">Checks</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/range.html">Range</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/layout.html">Layout</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/advance-select.html">Advance select</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/date-picker.html">Date picker</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/editor.html">Editor</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/rating.html">Rating</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/floating-labels.html">Floating labels</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/wizard.html">Wizard</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/validation.html">Validation</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Tables</p><a className="nav-link py-1 link-600 fw-medium" href="modules/tables/basic-tables.html">Basic tables</a><a className="nav-link py-1 link-600 fw-medium" href="modules/tables/advance-tables.html">Advance tables</a><a className="nav-link py-1 link-600 fw-medium" href="modules/tables/bulk-select.html">Bulk select</a>
                                                        <p className="nav-link text-700 mb-0 fw-bold">Charts</p><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/chartjs.html">Chartjs</a>
                                                        <p className="nav-link text-700 mb-0 fw-bold">ECharts</p><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/d3js.html">D3js<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/line-charts.html">Line charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/bar-charts.html">Bar charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/candlestick-charts.html">Candlestick charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/geo-map.html">Geo map</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/scatter-charts.html">Scatter charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/pie-charts.html">Pie charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/gauge-charts.html">Gauge charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/radar-charts.html">Radar charts</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Utilities</p><a className="nav-link py-1 link-600 fw-medium" href="modules/components/tooltips.html">Tooltips</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/treeview.html">Treeview</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/typed-text.html">Typed text</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/videos/embed.html">Embed</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/videos/plyr.html">Plyr</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/borders.html">Borders</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/clearfix.html">Clearfix</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/colors.html">Colors</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/colored-links.html">Colored links</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/display.html">Display</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/flex.html">Flex</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/float.html">Float</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/grid.html">Grid</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/overlayscrollbar.html">Overlay scrollbar<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/position.html">Position</a>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xxl-3">
                                                    <div className="nav flex-column pt-xxl-1">
                                                        <p className="nav-link text-700 mb-0 fw-bold">Icons</p><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/heatmap-charts.html">Heatmap charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/how-to-use.html">How to use</a><a className="nav-link py-1 link-600 fw-medium" href="modules/icons/font-awesome.html">Font awesome</a><a className="nav-link py-1 link-600 fw-medium" href="modules/icons/bootstrap-icons.html">Bootstrap icons</a>
                                                        <p className="nav-link text-700 mb-0 fw-bold">Maps</p><a className="nav-link py-1 link-600 fw-medium" href="modules/icons/feather.html">Feather</a><a className="nav-link py-1 link-600 fw-medium" href="modules/icons/material-icons.html">Material icons</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="documentations">Documentation</a>
                                <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="documentations">
                                    <div className="bg-white dark__bg-1000 rounded-3 py-2"><a className="dropdown-item link-600 fw-medium" href="documentation/getting-started.html">Getting started</a><a className="dropdown-item link-600 fw-medium" href="documentation/customization/configuration.html">Configuration</a><a className="dropdown-item link-600 fw-medium" href="documentation/customization/styling.html">Styling<span className="badge rounded-pill ms-2 badge-soft-success">Updated</span></a><a className="dropdown-item link-600 fw-medium" href="documentation/customization/dark-mode.html">Dark mode</a><a className="dropdown-item link-600 fw-medium" href="documentation/customization/plugin.html">Plugin</a><a className="dropdown-item link-600 fw-medium" href="documentation/faq.html">Faq</a><a className="dropdown-item link-600 fw-medium" href="documentation/gulp.html">Gulp</a><a className="dropdown-item link-600 fw-medium" href="documentation/design-file.html">Design file</a><a className="dropdown-item link-600 fw-medium" href="changelog.html">Changelog</a></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            <nav className={`navbar navbar-light navbar-glass navbar-top navbar-expand-lg `}>
                <div className="toggle-icon-wrapper">
                    <button
                        className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Toggle Navigation"
                        onClick={() => setShowNav()}
                    >
                        <span className="navbar-toggle-icon">
                            <span className="toggle-line"></span>
                        </span>
                    </button>
                </div>


                <button className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                <a className="navbar-brand me-1 me-sm-3" href="#">
                    <div className="d-flex align-items-center">
                        <img className="me-2" src="assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" />
                        <span className="font-sans-serif">falcon</span></div>
                </a>
                <div className="collapse navbar-collapse scrollbar" id="navbarStandard">
                    <ul className="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dashboards">Dashboard</a>
                            <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                                <div className="bg-white dark__bg-1000 rounded-3 py-2"><a className="dropdown-item link-600 fw-medium" href="index.html">Default</a><a className="dropdown-item link-600 fw-medium" href="dashboard/analytics.html">Analytics</a><a className="dropdown-item link-600 fw-medium" href="dashboard/crm.html">CRM</a><a className="dropdown-item link-600 fw-medium" href="dashboard/e-commerce.html">E commerce</a><a className="dropdown-item link-600 fw-medium" href="dashboard/lms.html">LMS<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="dropdown-item link-600 fw-medium" href="dashboard/project-management.html">Management</a><a className="dropdown-item link-600 fw-medium" href="dashboard/saas.html">SaaS</a><a className="dropdown-item link-600 fw-medium" href="dashboard/support-desk.html">Support desk<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a></div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="apps">App</a>
                            <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="apps">
                                <div className="card navbar-card-app shadow-none dark__bg-1000">
                                    <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="assets/img/icons/spot-illustrations/authentication-corner.png" width="130" alt="" />
                                        <div className="row">
                                            <div className="col-6 col-md-4">
                                                <div className="nav flex-column"><a className="nav-link py-1 link-600 fw-medium" href="app/calendar.html">Calendar</a><a className="nav-link py-1 link-600 fw-medium" href="app/chat.html">Chat</a><a className="nav-link py-1 link-600 fw-medium" href="app/kanban.html">Kanban</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Social</p><a className="nav-link py-1 link-600 fw-medium" href="app/social/feed.html">Feed</a><a className="nav-link py-1 link-600 fw-medium" href="app/social/activity-log.html">Activity log</a><a className="nav-link py-1 link-600 fw-medium" href="app/social/notifications.html">Notifications</a><a className="nav-link py-1 link-600 fw-medium" href="app/social/followers.html">Followers</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Support Desk</p><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/table-view.html">Table view</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/card-view.html">Card view</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/contacts.html">Contacts</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/contact-details.html">Contact details</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/tickets-preview.html">Tickets preview</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/quick-links.html">Quick links</a><a className="nav-link py-1 link-600 fw-medium" href="app/support-desk/reports.html">Reports</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">E-Learning</p><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/course/course-list.html">Course list</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/course/course-grid.html">Course grid</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/course/course-details.html">Course details</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/course/create-a-course.html">Create a course</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/student-overview.html">Student overview</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-learning/trainer-profile.html">Trainer profile</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Events</p><a className="nav-link py-1 link-600 fw-medium" href="app/events/create-an-event.html">Create an event</a><a className="nav-link py-1 link-600 fw-medium" href="app/events/event-detail.html">Event detail</a><a className="nav-link py-1 link-600 fw-medium" href="app/events/event-list.html">Event list</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Email</p><a className="nav-link py-1 link-600 fw-medium" href="app/email/inbox.html">Inbox</a><a className="nav-link py-1 link-600 fw-medium" href="app/email/email-detail.html">Email detail</a><a className="nav-link py-1 link-600 fw-medium" href="app/email/compose.html">Compose</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">E-Commerce</p><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/product/product-list.html">Product list</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/product/product-grid.html">Product grid</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/product/product-details.html">Product details</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/orders/order-list.html">Order list</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/orders/order-details.html">Order details</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/customers.html">Customers</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/customer-details.html">Customer details</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/shopping-cart.html">Shopping cart</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/checkout.html">Checkout</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/billing.html">Billing</a><a className="nav-link py-1 link-600 fw-medium" href="app/e-commerce/invoice.html">Invoice</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="pagess">Pages</a>
                            <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="pagess">
                                <div className="card navbar-card-pages shadow-none dark__bg-1000">
                                    <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="assets/img/icons/spot-illustrations/authentication-corner.png" width="130" alt="" />
                                        <div className="row">
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Simple Auth</p><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/forgot-password.html">Forgot password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/confirm-mail.html">Confirm mail</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/reset-password.html">Reset password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/simple/lock-screen.html">Lock screen</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Card Auth</p><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/forgot-password.html">Forgot password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/confirm-mail.html">Confirm mail</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/reset-password.html">Reset password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/card/lock-screen.html">Lock screen</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Split Auth</p><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/login.html">Login</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/logout.html">Logout</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/register.html">Register</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/forgot-password.html">Forgot password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/confirm-mail.html">Confirm mail</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/reset-password.html">Reset password</a><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/split/lock-screen.html">Lock screen</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Layouts</p><a className="nav-link py-1 link-600 fw-medium" href="demo/navbar-vertical.html">Navbar vertical</a><a className="nav-link py-1 link-600 fw-medium" href="demo/navbar-top.html">Top nav</a><a className="nav-link py-1 link-600 fw-medium" href="demo/navbar-double-top.html">Double top<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="demo/combo-nav.html">Combo nav</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Others</p><a className="nav-link py-1 link-600 fw-medium" href="pages/starter.html">Starter</a><a className="nav-link py-1 link-600 fw-medium" href="pages/landing.html">Landing</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">User</p><a className="nav-link py-1 link-600 fw-medium" href="pages/user/profile.html">Profile</a><a className="nav-link py-1 link-600 fw-medium" href="pages/user/settings.html">Settings</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Pricing</p><a className="nav-link py-1 link-600 fw-medium" href="pages/pricing/pricing-default.html">Pricing default</a><a className="nav-link py-1 link-600 fw-medium" href="pages/pricing/pricing-alt.html">Pricing alt</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Errors</p><a className="nav-link py-1 link-600 fw-medium" href="pages/errors/404.html">404</a><a className="nav-link py-1 link-600 fw-medium" href="pages/errors/500.html">500</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Miscellaneous</p><a className="nav-link py-1 link-600 fw-medium" href="pages/miscellaneous/associations.html">Associations</a><a className="nav-link py-1 link-600 fw-medium" href="pages/miscellaneous/invite-people.html">Invite people</a><a className="nav-link py-1 link-600 fw-medium" href="pages/miscellaneous/privacy-policy.html">Privacy policy</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">FAQ</p><a className="nav-link py-1 link-600 fw-medium" href="pages/faq/faq-basic.html">Faq basic</a><a className="nav-link py-1 link-600 fw-medium" href="pages/faq/faq-alt.html">Faq alt</a><a className="nav-link py-1 link-600 fw-medium" href="pages/faq/faq-accordion.html">Faq accordion</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Other Auth</p><a className="nav-link py-1 link-600 fw-medium" href="pages/authentication/wizard.html">Wizard</a><a className="nav-link py-1 link-600 fw-medium" href="#authentication-modal" data-bs-toggle="modal">Modal</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="moduless">Modules</a>
                            <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="moduless">
                                <div className="card navbar-card-components shadow-none dark__bg-1000">
                                    <div className="card-body scrollbar max-h-dropdown"><img className="img-dropdown" src="assets/img/icons/spot-illustrations/authentication-corner.png" width="130" alt="" />
                                        <div className="row">
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Components</p><a className="nav-link py-1 link-600 fw-medium" href="modules/maps/google-map.html">Google map</a><a className="nav-link py-1 link-600 fw-medium" href="modules/maps/leaflet-map.html">Leaflet map</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/accordion.html">Accordion</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/alerts.html">Alerts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/anchor.html">Anchor</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/animated-icons.html">Animated icons</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/background.html">Background</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/badges.html">Badges</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/bottom-bar.html">Bottom bar<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/breadcrumbs.html">Breadcrumbs</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/buttons.html">Buttons</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/calendar.html">Calendar</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column mt-md-4 pt-md-1"><a className="nav-link py-1 link-600 fw-medium" href="modules/components/cards.html">Cards</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/carousel/bootstrap.html">Bootstrap carousel</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/carousel/swiper.html">Swiper</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/collapse.html">Collapse</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/cookie-notice.html">Cookie notice</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/countup.html">Countup</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/draggable.html">Draggable</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/dropdowns.html">Dropdowns</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/jquery-components.html">Jquery<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/list-group.html">List group</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/modals.html">Modals</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/navs.html">Navs</a></div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column mt-xxl-4 pt-xxl-1"><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/vertical-navbar.html">Navbar vertical</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/top-navbar.html">Top nav</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/double-top-navbar.html">Double top<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/combo-navbar.html">Combo nav</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/offcanvas.html">Offcanvas</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/avatar.html">Avatar</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/images.html">Images</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/figures.html">Figures</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/hoverbox.html">Hoverbox</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pictures/lightbox.html">Lightbox</a></div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column mt-xxl-4 pt-xxl-1"><a className="nav-link py-1 link-600 fw-medium" href="modules/components/progress-bar.html">Progress bar</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/placeholder.html">Placeholder</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/pagination.html">Pagination</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/popovers.html">Popovers</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/scrollspy.html">Scrollspy</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/search.html">Search</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/spinners.html">Spinners</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/timeline.html">Timeline</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/toasts.html">Toasts</a></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Forms</p><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/form-control.html">Form control</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/input-group.html">Input group</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/select.html">Select</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/checks.html">Checks</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/range.html">Range</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/basic/layout.html">Layout</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/advance-select.html">Advance select</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/date-picker.html">Date picker</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/editor.html">Editor</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/advance/rating.html">Rating</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/floating-labels.html">Floating labels</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/wizard.html">Wizard</a><a className="nav-link py-1 link-600 fw-medium" href="modules/forms/validation.html">Validation</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Tables</p><a className="nav-link py-1 link-600 fw-medium" href="modules/tables/basic-tables.html">Basic tables</a><a className="nav-link py-1 link-600 fw-medium" href="modules/tables/advance-tables.html">Advance tables</a><a className="nav-link py-1 link-600 fw-medium" href="modules/tables/bulk-select.html">Bulk select</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Charts</p><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/chartjs.html">Chartjs</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">ECharts</p><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/d3js.html">D3js<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/line-charts.html">Line charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/bar-charts.html">Bar charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/candlestick-charts.html">Candlestick charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/geo-map.html">Geo map</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/scatter-charts.html">Scatter charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/pie-charts.html">Pie charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/gauge-charts.html">Gauge charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/radar-charts.html">Radar charts</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Utilities</p><a className="nav-link py-1 link-600 fw-medium" href="modules/components/tooltips.html">Tooltips</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/treeview.html">Treeview</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/typed-text.html">Typed text</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/videos/embed.html">Embed</a><a className="nav-link py-1 link-600 fw-medium" href="modules/components/videos/plyr.html">Plyr</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/borders.html">Borders</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/clearfix.html">Clearfix</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/colors.html">Colors</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/colored-links.html">Colored links</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/display.html">Display</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/flex.html">Flex</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/float.html">Float</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/grid.html">Grid</a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/overlayscrollbar.html">Overlay scrollbar<span className="badge rounded-pill ms-2 badge-soft-success">New</span></a><a className="nav-link py-1 link-600 fw-medium" href="modules/utilities/position.html">Position</a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-xxl-3">
                                                <div className="nav flex-column pt-xxl-1">
                                                    <p className="nav-link text-700 mb-0 fw-bold">Icons</p><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/heatmap-charts.html">Heatmap charts</a><a className="nav-link py-1 link-600 fw-medium" href="modules/charts/echarts/how-to-use.html">How to use</a><a className="nav-link py-1 link-600 fw-medium" href="modules/icons/font-awesome.html">Font awesome</a><a className="nav-link py-1 link-600 fw-medium" href="modules/icons/bootstrap-icons.html">Bootstrap icons</a>
                                                    <p className="nav-link text-700 mb-0 fw-bold">Maps</p><a className="nav-link py-1 link-600 fw-medium" href="modules/icons/feather.html">Feather</a><a className="nav-link py-1 link-600 fw-medium" href="modules/icons/material-icons.html">Material icons</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="documentations">Documentation</a>
                            <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="documentations">
                                <div className="bg-white dark__bg-1000 rounded-3 py-2"><a className="dropdown-item link-600 fw-medium" href="documentation/getting-started.html">Getting started</a><a className="dropdown-item link-600 fw-medium" href="documentation/customization/configuration.html">Configuration</a><a className="dropdown-item link-600 fw-medium" href="documentation/customization/styling.html">Styling<span className="badge rounded-pill ms-2 badge-soft-success">Updated</span></a><a className="dropdown-item link-600 fw-medium" href="documentation/customization/dark-mode.html">Dark mode</a><a className="dropdown-item link-600 fw-medium" href="documentation/customization/plugin.html">Plugin</a><a className="dropdown-item link-600 fw-medium" href="documentation/faq.html">Faq</a><a className="dropdown-item link-600 fw-medium" href="documentation/gulp.html">Gulp</a><a className="dropdown-item link-600 fw-medium" href="documentation/design-file.html">Design file</a><a className="dropdown-item link-600 fw-medium" href="changelog.html">Changelog</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
                    <li className="nav-item">
                        <div className="theme-control-toggle fa-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span className="fas fa-sun fs-0"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span className="fas fa-moon fs-0"></span></label></div>
                    </li>
                    <li className="nav-item d-none d-sm-block">
                        <a className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait" href="app/e-commerce/shopping-cart.html"><span className="fas fa-shopping-cart" data-fa-transform="shrink-7" style={{ fontSize: "33px" }}></span><span className="notification-indicator-number">1</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait" id="navbarDropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll"><span className="fas fa-bell" data-fa-transform="shrink-6" style={{ fontSize: "33px" }}></span></a>
                        <div className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg" aria-labelledby="navbarDropdownNotification">
                            <div className="card card-notification shadow-none">
                                <div className="card-header">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-auto">
                                            <h6 className="card-header-title mb-0">Notifications</h6>
                                        </div>
                                        <div className="col-auto ps-0 ps-sm-3"><a className="card-link fw-normal" href="#">Mark all as read</a></div>
                                    </div>
                                </div>
                                <div className="scrollbar-overlay" style={{ maxHeight: "19rem" }}>
                                    <div className="list-group list-group-flush fw-normal fs--1">
                                        <div className="list-group-title border-bottom">NEW</div>
                                        <div className="list-group-item">
                                            <a className="notification notification-flush notification-unread" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-2xl me-3">
                                                        <img className="rounded-circle" src="assets/img/team/1-thumb.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1"><strong>Emma Watson</strong> replied to your comment : "Hello world 😍"</p>
                                                    <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">💬</span>Just now</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list-group-item">
                                            <a className="notification notification-flush notification-unread" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-2xl me-3">
                                                        <div className="avatar-name rounded-circle"><span>AB</span></div>
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1"><strong>Albert Brooks</strong> reacted to <strong>Mia Khalifa's</strong> status</p>
                                                    <span className="notification-time"><span className="me-2 fab fa-gratipay text-danger"></span>9hr</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list-group-title border-bottom">EARLIER</div>
                                        <div className="list-group-item">
                                            <a className="notification notification-flush" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-2xl me-3">
                                                        <img className="rounded-circle" src="assets/img/icons/weather-sm.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1">The forecast today shows a low of 20&#8451; in California. See today's weather.</p>
                                                    <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">🌤️</span>1d</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list-group-item">
                                            <a className="border-bottom-0 notification-unread  notification notification-flush" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-xl me-3">
                                                        <img className="rounded-circle" src="assets/img/logos/oxford.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1"><strong>University of Oxford</strong> created an event : "Causal Inference Hilary 2019"</p>
                                                    <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">✌️</span>1w</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="list-group-item">
                                            <a className="border-bottom-0 notification notification-flush" href="#!">
                                                <div className="notification-avatar">
                                                    <div className="avatar avatar-xl me-3">
                                                        <img className="rounded-circle" src="assets/img/team/10.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="notification-body">
                                                    <p className="mb-1"><strong>James Cameron</strong> invited to join the group: United Nations International Children's Fund</p>
                                                    <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">🙋‍</span>2d</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-center border-top"><a className="card-link d-block" href="app/social/notifications.html">View all</a></div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown px-1">
                        <a className="nav-link fa-icon-wait nine-dots p-1" id="navbarDropdownMenu" role="button" data-hide-on-body-scroll="data-hide-on-body-scroll" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="43" viewBox="0 0 16 16" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
                            <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
                            <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
                            <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
                            <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
                            <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
                            <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
                            <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
                            <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
                        </svg></a>
                        <div className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg" aria-labelledby="navbarDropdownMenu">
                            <div className="card shadow-none">
                                <div className="scrollbar-overlay nine-dots-dropdown">
                                    <div className="card-body px-3">
                                        <div className="row text-center gx-0 gy-0">
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="pages/user/profile.html" target="_blank">
                                                <div className="avatar avatar-2xl"> <img className="rounded-circle" src="assets/img/team/3.jpg" alt="" /></div>
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2">Account</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="https://themewagon.com/" target="_blank"><img className="rounded" src="assets/img/nav-icons/themewagon.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Themewagon</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="https://mailbluster.com/" target="_blank"><img className="rounded" src="assets/img/nav-icons/mailbluster.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Mailbluster</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/google.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Google</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/spotify.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Spotify</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/steam.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Steam</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/github-light.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Github</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/discord.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Discord</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/xbox.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">xbox</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/trello.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Kanban</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/hp.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Hp</p>
                                            </a></div>
                                            <div className="col-12">
                                                <hr className="my-3 mx-n3 bg-200" />
                                            </div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/linkedin.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Linkedin</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/twitter.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Twitter</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/facebook.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Facebook</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/instagram.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Instagram</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/pinterest.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Pinterest</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/slack.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Slack</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="assets/img/nav-icons/deviantart.png" alt="" width="40" height="40" />
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2 pt-1">Deviantart</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="app/events/event-detail.html" target="_blank">
                                                <div className="avatar avatar-2xl">
                                                    <div className="avatar-name rounded-circle bg-soft-primary text-primary"><span className="fs-2">E</span></div>
                                                </div>
                                                <p className="mb-0 fw-medium text-800 text-truncate fs--2">Events</p>
                                            </a></div>
                                            <div className="col-12"><a className="btn btn-outline-primary btn-sm mt-4" href="#!">Show more</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link pe-0 ps-2" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar avatar-xl">
                            <img className="rounded-circle" src="assets/img/team/3-thumb.png" alt="" />
                        </div>
                    </a>
                        <div className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                            <div className="bg-white dark__bg-1000 rounded-2 py-2">
                                <a className="dropdown-item fw-bold text-warning" href="#!"><span className="fas fa-crown me-1"></span><span>Go Pro</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#!">Set status</a>
                                <a className="dropdown-item" href="pages/user/profile.html">Profile &amp; account</a>
                                <a className="dropdown-item" href="#!">Feedback</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="pages/user/settings.html">Settings</a>
                                <a className="dropdown-item" href="pages/authentication/card/logout.html">Logout</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>





            {/* <div className="modal fade" id="authentication-modal" tabindex="-1" role="dialog" aria-labelledby="authentication-modal-label" aria-hidden="true">
                    <div className="modal-dialog mt-6" role="document">
                        <div className="modal-content border-0">
                            <div className="modal-header px-5 position-relative modal-shape-header bg-shape">
                                <div className="position-relative z-index-1 light">
                                    <h4 className="mb-0 text-white" id="authentication-modal-label">Register</h4>
                                    <p className="fs--1 mb-0 text-white">Please create your free Falcon account</p>
                                </div><button className="btn-close btn-close-white position-absolute top-0 end-0 mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body py-4 px-5">
                                <form>
                                    <div className="mb-3"><label className="form-label" for="modal-auth-name">Name</label><input className="form-control" type="text" autocomplete="on" id="modal-auth-name" /></div>
                                    <div className="mb-3"><label className="form-label" for="modal-auth-email">Email address</label><input className="form-control" type="email" autocomplete="on" id="modal-auth-email" /></div>
                                    <div className="row gx-2">
                                        <div className="mb-3 col-sm-6"><label className="form-label" for="modal-auth-password">Password</label><input className="form-control" type="password" autocomplete="on" id="modal-auth-password" /></div>
                                        <div className="mb-3 col-sm-6"><label className="form-label" for="modal-auth-confirm-password">Confirm Password</label><input className="form-control" type="password" autocomplete="on" id="modal-auth-confirm-password" /></div>
                                    </div>
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="modal-auth-register-checkbox" /><label className="form-label" for="modal-auth-register-checkbox">I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a></label></div>
                                    <div className="mb-3"><button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Register</button></div>
                                </form>
                                <div className="position-relative mt-5">
                                    <hr />
                                    <div className="divider-content-center">or register with</div>
                                </div>
                                <div className="row g-2 mt-2">
                                    <div className="col-sm-6"><a className="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span className="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> google</a></div>
                                    <div className="col-sm-6"><a className="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span className="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> facebook</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  */}

        </>
    )
} 
