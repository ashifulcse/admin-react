import React, { useState } from 'react'

export default function Header({showSideNav, setShowSideNav}) {

    const setShowNav = () =>{
        setShowSideNav(!showSideNav)
    }

    return (
        <>

            <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg" data-double-top-nav="data-double-top-nav">
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
 
                <div className="d-flex" style={{position: "absolute", right: "2rem"}}>
                    
                    <button className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDoubleTop" aria-controls="navbarDoubleTop" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggle-icon">
                            <span className="toggle-line"></span>
                        </span>
                    </button>
                    
                    {!showSideNav && (
                        <a className="navbar-brand me-1 me-sm-3" href="/" style={{position: "fixed", left: "3rem", top: "1rem"}}>
                            <div className="d-flex align-items-center">
                                <img className="me-2" src="assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" />
                                <span className="font-sans-serif">Apsis</span>
                            </div>
                        </a>
                    )}

                    <ul className="navbar-nav navbar-nav-icons flex-row align-items-center">
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
            </nav>
 




            <div className="modal fade" id="authentication-modal" tabindex="-1" role="dialog" aria-labelledby="authentication-modal-label" aria-hidden="true">
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
                </div> 

        </>
    )
} 
