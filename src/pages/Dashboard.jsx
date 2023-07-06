import React from 'react'

export default function Dashboard() {
    return (
        <div className="content">
            <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand" style={{ display: "none" }}>
                <button className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
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
                        <a className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait" href="app/e-commerce/shopping-cart.html">
                            <span className="fas fa-shopping-cart" data-fa-transform="shrink-7" style={{ fontSize: "33px" }}></span>
                            <span className="notification-indicator-number">1</span></a>
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
            <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg" style={{ display: "none" }} data-move-target="#navbarVerticalNav" data-navbar-top="combo">
                <button className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                <a className="navbar-brand me-1 me-sm-3" href="index.html">
                    <div className="d-flex align-items-center"><img className="me-2" src="assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" /><span className="font-sans-serif">falcon</span></div>
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

            <div className="row g-3 mb-3">
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100 ecommerce-card-min-width">
                        <div className="card-header pb-0">
                            <h6 className="mb-0 mt-2 d-flex align-items-center">Weekly Sales<span className="ms-1 text-400" data-bs-toggle="tooltip" data-bs-placement="top" title="Calculated according to last week's sales"><span className="far fa-question-circle" data-fa-transform="shrink-1"></span></span></h6>
                        </div>
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row">
                                <div className="col">
                                    <p className="font-sans-serif lh-1 mb-1 fs-4">$47K</p><span className="badge badge-soft-success rounded-pill fs--2">+3.5%</span>
                                </div>
                                <div className="col-auto ps-0">
                                    <div className="echart-bar-weekly-sales h-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100">
                        <div className="card-header pb-0">
                            <h6 className="mb-0 mt-2">Total Order</h6>
                        </div>
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row justify-content-between">
                                <div className="col-auto align-self-end">
                                    <div className="fs-4 fw-normal font-sans-serif text-700 lh-1 mb-1">58.4K</div><span className="badge rounded-pill fs--2 bg-200 text-primary"><span className="fas fa-caret-up me-1"></span>13.6%</span>
                                </div>
                                <div className="col-auto ps-0 mt-n4">
                                    <div className="echart-default-total-order" data-echarts='{"tooltip":{"trigger":"axis","formatter":"{b0} : {c0}"},"xAxis":{"data":["Week 4","Week 5","Week 6","Week 7"]},"series":[{"type":"line","data":[20,40,100,120],"smooth":true,"lineStyle":{"width":3}}],"grid":{"bottom":"2%","top":"2%","right":"10px","left":"10px"}}' data-echart-responsive="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100">
                        <div className="card-body">
                            <div className="row h-100 justify-content-between g-0">
                                <div className="col-5 col-sm-6 col-xxl pe-2">
                                    <h6 className="mt-1">Market Share</h6>
                                    <div className="fs--2 mt-3">
                                        <div className="d-flex flex-between-center mb-1">
                                            <div className="d-flex align-items-center"><span className="dot bg-primary"></span><span className="fw-semi-bold">Samsung</span></div>
                                            <div className="d-xxl-none">33%</div>
                                        </div>
                                        <div className="d-flex flex-between-center mb-1">
                                            <div className="d-flex align-items-center"><span className="dot bg-info"></span><span className="fw-semi-bold">Huawei</span></div>
                                            <div className="d-xxl-none">29%</div>
                                        </div>
                                        <div className="d-flex flex-between-center mb-1">
                                            <div className="d-flex align-items-center"><span className="dot bg-300"></span><span className="fw-semi-bold">Apple</span></div>
                                            <div className="d-xxl-none">20%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto position-relative">
                                    <div className="echart-market-share"></div>
                                    <div className="position-absolute top-50 start-50 translate-middle text-dark fs-2">26M</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100">
                        <div className="card-header d-flex flex-between-center pb-0">
                            <h6 className="mb-0">Weather</h6>
                            <div className="dropdown font-sans-serif btn-reveal-trigger"><button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-weather-update" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2"></span></button>
                                <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-weather-update"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-2">
                            <div className="row g-0 h-100 align-items-center">
                                <div className="col">
                                    <div className="d-flex align-items-center"><img className="me-3" src="assets/img/icons/weather-icon.png" alt="" height="60" />
                                        <div>
                                            <h6 className="mb-2">New York City</h6>
                                            <div className="fs--2 fw-semi-bold">
                                                <div className="text-warning">Sunny</div>Precipitation: 50%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto text-center ps-2">
                                    <div className="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1">31&deg;</div>
                                    <div className="fs--1 text-800">32&deg; / 25&deg;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6 pe-lg-2 mb-3">
                    <div className="card h-lg-100 overflow-hidden">
                        <div className="card-header bg-light">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="mb-0">Running Projects</h6>
                                </div>
                                <div className="col-auto text-center pe-x1"><select className="form-select form-select-sm">
                                    <option>Working Time</option>
                                    <option>Estimated Time</option>
                                    <option>Billable Time</option>
                                </select></div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-soft-primary text-dark"><span className="fs-0 text-primary">F</span></div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Falcon</a><span className="badge rounded-pill ms-2 bg-200 text-primary">38%</span></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs--1 fw-semi-bold">12:50:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div className="progress bg-200 me-2" style={{ height: "5px" }}>
                                                <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "38%" }} aria-valuenow="38" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-soft-success text-dark"><span className="fs-0 text-success">R</span></div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Reign</a><span className="badge rounded-pill ms-2 bg-200 text-primary">79%</span></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs--1 fw-semi-bold">25:20:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div className="progress bg-200 me-2" style={{ height: "5px" }}>
                                                <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "79%" }} aria-valuenow="79" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-soft-info text-dark"><span className="fs-0 text-info">B</span></div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Boots4</a><span className="badge rounded-pill ms-2 bg-200 text-primary">90%</span></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs--1 fw-semi-bold">58:20:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div className="progress bg-200 me-2" style={{ height: "5px" }}>
                                                <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-soft-warning text-dark"><span className="fs-0 text-warning">R</span></div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Raven</a><span className="badge rounded-pill ms-2 bg-200 text-primary">40%</span></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs--1 fw-semi-bold">21:20:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div className="progress bg-200 me-2" style={{ height: "5px" }}>
                                                <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 align-items-center py-2 position-relative">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-soft-danger text-dark"><span className="fs-0 text-danger">S</span></div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center"><a className="text-800 stretched-link" href="#!">Slick</a><span className="badge rounded-pill ms-2 bg-200 text-primary">70%</span></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs--1 fw-semi-bold">31:20:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div className="progress bg-200 me-2" style={{ height: "5px" }}>
                                                <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-light p-0"><a className="btn btn-sm btn-link d-block w-100 py-2" href="#!">Show all projects<span className="fas fa-chevron-right ms-1 fs--2"></span></a></div>
                    </div>
                </div>
                <div className="col-lg-6 ps-lg-2 mb-3">
                    <div className="card h-lg-100">
                        <div className="card-header">
                            <div className="row flex-between-center">
                                <div className="col-auto">
                                    <h6 className="mb-0">Total Sales</h6>
                                </div>
                                <div className="col-auto d-flex"><select className="form-select form-select-sm select-month me-2">
                                    <option value="0">January</option>
                                    <option value="1">February</option>
                                    <option value="2">March</option>
                                    <option value="3">April</option>
                                    <option value="4">May</option>
                                    <option value="5">Jun</option>
                                    <option value="6">July</option>
                                    <option value="7">August</option>
                                    <option value="8">September</option>
                                    <option value="9">October</option>
                                    <option value="10">November</option>
                                    <option value="11">December</option>
                                </select>
                                    <div className="dropdown font-sans-serif btn-reveal-trigger"><button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-total-sales" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2"></span></button>
                                        <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-total-sales"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body h-100 pe-0">
                            <div className="echart-line-total-sales h-100" data-echart-responsive="true"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6 col-xl-7 col-xxl-8 mb-3 pe-lg-2 mb-3">
                    <div className="card h-lg-100">
                        <div className="card-body d-flex align-items-center">
                            <div className="w-100">
                                <h6 className="mb-3 text-800">Using Storage <strong className="text-dark">1775.06 MB </strong>of 2 GB</h6>
                                <div className="progress mb-3 rounded-3" style={{ height: "10px" }}>
                                    <div className="progress-bar bg-progress-gradient border-end border-white border-2" role="progressbar" style={{ width: "43.72%" }} aria-valuenow="43.72" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-info border-end border-white border-2" role="progressbar" style={{ width: "18.76%" }} aria-valuenow="18.76" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-success border-end border-white border-2" role="progressbar" style={{ width: "9.38" }} aria-valuenow="9.38" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-200" role="progressbar" style={{ width: "28.14%" }} aria-valuenow="28.14" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="row fs--1 fw-semi-bold text-500 g-0">
                                    <div className="col-auto d-flex align-items-center pe-3"><span className="dot bg-primary"></span><span>Regular</span><span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(895MB)</span></div>
                                    <div className="col-auto d-flex align-items-center pe-3"><span className="dot bg-info"></span><span>System</span><span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(379MB)</span></div>
                                    <div className="col-auto d-flex align-items-center pe-3"><span className="dot bg-success"></span><span>Shared</span><span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(192MB)</span></div>
                                    <div className="col-auto d-flex align-items-center"><span className="dot bg-200"></span><span>Free</span><span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">(576MB)</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-5 col-xxl-4 mb-3 ps-lg-2">
                    <div className="card h-lg-100">
                        <div className="bg-holder bg-card" style={{ backgroundImage: "url(assets/img/icons/spot-illustrations/corner-1.png)" }}></div>

                        <div className="card-body position-relative">
                            <h5 className="text-warning">Running out of your space?</h5>
                            <p className="fs--1 mb-0">Your storage will be running out soon. Get more space and powerful productivity features.</p><a className="btn btn-link fs--1 text-warning mt-lg-3 ps-0" href="#!">Upgrade storage<span className="fas fa-chevron-right ms-1" data-fa-transform="shrink-4 down-1"></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-7 col-xl-8 pe-lg-2 mb-3">
                    <div className="card h-lg-100 overflow-hidden">
                        <div className="card-body p-0">
                            <div className="table-responsive scrollbar">
                                <table className="table table-dashboard mb-0 table-borderless fs--1 border-200">
                                    <thead className="bg-light">
                                        <tr className="text-900">
                                            <th>Best Selling Products</th>
                                            <th className="text-end">Revenue ($3333)</th>
                                            <th className="pe-x1 text-end" style={{ width: "8rem" }}>Revenue (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-bottom border-200">
                                            <td>
                                                <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/12.png" width="60" alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Raven Pro</a></h6>
                                                        <p className="fw-semi-bold mb-0 text-500">Landing</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">$1311</td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div className="progress me-3 rounded-3 bg-200" style={{ height: "5px", width: "80px" }}>
                                                        <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "39%" }} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">39%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom border-200">
                                            <td>
                                                <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/10.png" width="60" alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Boots4</a></h6>
                                                        <p className="fw-semi-bold mb-0 text-500">Portfolio</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">$860</td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div className="progress me-3 rounded-3 bg-200" style={{ height: "5px", width: "80px" }}>
                                                        <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "26%" }} aria-valuenow="26" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">26%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom border-200">
                                            <td>
                                                <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/11.png" width="60" alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Falcon</a></h6>
                                                        <p className="fw-semi-bold mb-0 text-500">Admin</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">$539</td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div className="progress me-3 rounded-3 bg-200" style={{ height: "5px", width: "80px" }}>
                                                        <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "16%" }} aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">16%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom border-200">
                                            <td>
                                                <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/14.png" width="60" alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Slick</a></h6>
                                                        <p className="fw-semi-bold mb-0 text-500">Builder</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">$343</td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div className="progress me-3 rounded-3 bg-200" style={{ height: "5px", width: "80px" }}>
                                                        <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">10%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center position-relative"><img className="rounded-1 border border-200" src="assets/img/products/13.png" width="60" alt="" />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold"><a className="text-dark stretched-link" href="#!">Reign Pro</a></h6>
                                                        <p className="fw-semi-bold mb-0 text-500">Agency</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">$280</td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div className="progress me-3 rounded-3 bg-200" style={{ height: "5px", width: "80px" }}>
                                                        <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "8%" }} aria-valuenow="8" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">8%</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer bg-light py-2">
                            <div className="row flex-between-center">
                                <div className="col-auto"><select className="form-select form-select-sm">
                                    <option>Last 7 days</option>
                                    <option>Last Month</option>
                                    <option>Last Year</option>
                                </select></div>
                                <div className="col-auto"><a className="btn btn-sm btn-falcon-default" href="#!">View All</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-xl-4 ps-lg-2 mb-3">
                    <div className="card">
                        <div className="card-header d-flex flex-between-center bg-light py-2">
                            <h6 className="mb-0">Shared Files</h6><a className="py-1 fs--1 font-sans-serif" href="#!">View All</a>
                        </div>
                        <div className="card-body pb-0">
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail"><img className="border h-100 w-100 fit-cover rounded-2" src="assets/img/products/5-thumb.png" alt="" /></div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">apple-smart-watch.png</a></h6>
                                    <div className="fs--1"><span className="fw-semi-bold">Antony</span><span className="fw-medium text-600 ms-2">Just Now</span></div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt="" width="15" /></a><button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt="" width="15" /></button></div>
                                </div>
                            </div>
                            <hr className="text-200" />
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail"><img className="border h-100 w-100 fit-cover rounded-2" src="assets/img/products/3-thumb.png" alt="" /></div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">iphone.jpg</a></h6>
                                    <div className="fs--1"><span className="fw-semi-bold">Antony</span><span className="fw-medium text-600 ms-2">Yesterday at 1:30 PM</span></div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt="" width="15" /></a><button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt="" width="15" /></button></div>
                                </div>
                            </div>
                            <hr className="text-200" />
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail"><img className="img-fluid" src="assets/img/icons/zip.png" alt="" /></div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">Falcon v1.8.2</a></h6>
                                    <div className="fs--1"><span className="fw-semi-bold">Jane</span><span className="fw-medium text-600 ms-2">27 Sep at 10:30 AM</span></div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt="" width="15" /></a><button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt="" width="15" /></button></div>
                                </div>
                            </div>
                            <hr className="text-200" />
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail"><img className="border h-100 w-100 fit-cover rounded-2" src="assets/img/products/2-thumb.png" alt="" /></div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">iMac.jpg</a></h6>
                                    <div className="fs--1"><span className="fw-semi-bold">Rowen</span><span className="fw-medium text-600 ms-2">23 Sep at 6:10 PM</span></div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt="" width="15" /></a><button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt="" width="15" /></button></div>
                                </div>
                            </div>
                            <hr className="text-200" />
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail"><img className="img-fluid" src="assets/img/icons/docs.png" alt="" /></div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1"><a className="stretched-link text-900 fw-semi-bold" href="#!">functions.php</a></h6>
                                    <div className="fs--1"><span className="fw-semi-bold">John</span><span className="fw-medium text-600 ms-2">1 Oct at 4:30 PM</span></div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y"><a className="btn btn-light border-300 btn-sm me-1 text-600" data-bs-toggle="tooltip" data-bs-placement="top" title="Download" href="assets/img/icons/cloud-download.svg" download="download"><img src="assets/img/icons/cloud-download.svg" alt="" width="15" /></a><button className="btn btn-light border-300 btn-sm me-1 text-600 shadow-none" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><img src="assets/img/icons/edit-alt.svg" alt="" width="15" /></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-sm-6 col-xxl-3 pe-sm-2 mb-3 mb-xxl-0">
                    <div className="card">
                        <div className="card-header d-flex flex-between-center bg-light py-2">
                            <h6 className="mb-0">Active Users</h6>
                            <div className="dropdown font-sans-serif btn-reveal-trigger"><button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-active-user" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2"></span></button>
                                <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-active-user"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body py-2">
                            <div className="d-flex align-items-center position-relative mb-3">
                                <div className="avatar avatar-2xl status-online">
                                    <img className="rounded-circle" src="assets/img/team/1.jpg" alt="" />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">Emma Watson</a></h6>
                                    <p className="text-500 fs--2 mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center position-relative mb-3">
                                <div className="avatar avatar-2xl status-online">
                                    <img className="rounded-circle" src="assets/img/team/2.jpg" alt="" />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">Antony Hopkins</a></h6>
                                    <p className="text-500 fs--2 mb-0">Moderator</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center position-relative mb-3">
                                <div className="avatar avatar-2xl status-away">
                                    <img className="rounded-circle" src="assets/img/team/3.jpg" alt="" />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">Anna Karinina</a></h6>
                                    <p className="text-500 fs--2 mb-0">Editor</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center position-relative mb-3">
                                <div className="avatar avatar-2xl status-offline">
                                    <img className="rounded-circle" src="assets/img/team/4.jpg" alt="" />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">John Lee</a></h6>
                                    <p className="text-500 fs--2 mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center position-relative false">
                                <div className="avatar avatar-2xl status-offline">
                                    <img className="rounded-circle" src="assets/img/team/5.jpg" alt="" />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold"><a className="stretched-link text-900" href="pages/user/profile.html">Rowen Atkinson</a></h6>
                                    <p className="text-500 fs--2 mb-0">Editor</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-light p-0"><a className="btn btn-sm btn-link d-block w-100 py-2" href="app/social/followers.html">All active users<span className="fas fa-chevron-right ms-1 fs--2"></span></a></div>
                    </div>
                </div>
                <div className="col-sm-6 col-xxl-3 ps-sm-2 order-xxl-1 mb-3 mb-xxl-0">
                    <div className="card h-100">
                        <div className="card-header bg-light d-flex flex-between-center py-2">
                            <h6 className="mb-0">Bandwidth Saved</h6>
                            <div className="dropdown font-sans-serif btn-reveal-trigger"><button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-bandwidth-saved" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2"></span></button>
                                <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-bandwidth-saved"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body d-flex flex-center flex-column">
                            <div className="echart-bandwidth-saved" data-echart-responsive="true"></div>
                            <div className="text-center mt-3">
                                <h6 className="fs-0 mb-1"><span className="fas fa-check text-success me-1" data-fa-transform="shrink-2"></span>35.75 GB saved</h6>
                                <p className="fs--1 mb-0">38.44 GB total bandwidth</p>
                            </div>
                        </div>
                        <div className="card-footer bg-light py-2">
                            <div className="row flex-between-center">
                                <div className="col-auto"><select className="form-select form-select-sm">
                                    <option>Last 6 Months</option>
                                    <option>Last Year</option>
                                    <option>Last 2 Year</option>
                                </select></div>
                                <div className="col-auto"><a className="fs--1 font-sans-serif" href="#!">Help</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 px-xxl-2">
                    <div className="card h-100">
                        <div className="card-header bg-light py-2">
                            <div className="row flex-between-center">
                                <div className="col-auto">
                                    <h6 className="mb-0">Top Products</h6>
                                </div>
                                <div className="col-auto d-flex"><a className="btn btn-link btn-sm me-2" href="#!">View Details</a>
                                    <div className="dropdown font-sans-serif btn-reveal-trigger"><button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" id="dropdown-top-products" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2"></span></button>
                                        <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-top-products"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body h-100">
                            <div className="echart-bar-top-products h-100" data-echart-responsive="true"></div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="row g-0 justify-content-between fs--1 mt-4 mb-3">
                    <div className="col-12 col-sm-auto text-center">
                        <p className="mb-0 text-600">Thank you for creating with Falcon <span className="d-none d-sm-inline-block">| </span><br className="d-sm-none" /> 2022 &copy; <a href="https://themewagon.com/">Themewagon</a></p>
                    </div>
                    <div className="col-12 col-sm-auto text-center">
                        <p className="mb-0 text-600">v3.14.0</p>
                    </div>
                </div>
            </footer>
        </div>
    )
} 
