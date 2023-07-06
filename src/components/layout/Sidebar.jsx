import React, { useState } from 'react'

export default function Sidebar({showSideNav, setShowSideNav}) {

    return (
        <nav className={`navbar navbar-light navbar-vertical navbar-expand-xl`} style={{marginTop:"70px"}} >  
         
            {
                showSideNav && 
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
                                <li className="nav-item"><a className="nav-link" href="dashboard/analytics.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Analytics</span></div>
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
                                <li className="nav-item"><a className="nav-link" href="dashboard/saas.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">SaaS</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="dashboard/support-desk.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Support desk</span><span className="badge rounded-pill ms-2 badge-soft-success">New</span></div>
                                </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <div className="row navbar-vertical-label-wrapper mt-3 mb-2">
                                <div className="col-auto navbar-vertical-label">App</div>
                                <div className="col ps-0">
                                    <hr className="mb-0 navbar-vertical-divider" />
                                </div>
                            </div><a className="nav-link" href="app/calendar.html" role="button">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-calendar-alt"></span></span><span className="nav-link-text ps-1">Calendar</span></div>
                            </a><a className="nav-link" href="app/chat.html" role="button">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-comments"></span></span><span className="nav-link-text ps-1">Chat</span></div>
                            </a><a className="nav-link dropdown-indicator" href="#email" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="email">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-envelope-open"></span></span><span className="nav-link-text ps-1">Email</span></div>
                            </a>
                            <ul className="nav collapse" id="email">
                                <li className="nav-item"><a className="nav-link" href="app/email/inbox.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Inbox</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/email/email-detail.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Email detail</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/email/compose.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Compose</span></div>
                                </a>
                                </li>
                            </ul><a className="nav-link dropdown-indicator" href="#events" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="events">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-calendar-day"></span></span><span className="nav-link-text ps-1">Events</span></div>
                            </a>
                            <ul className="nav collapse" id="events">
                                <li className="nav-item"><a className="nav-link" href="app/events/create-an-event.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create an event</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/events/event-detail.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Event detail</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/events/event-list.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Event list</span></div>
                                </a>
                                </li>
                            </ul><a className="nav-link dropdown-indicator" href="#e-commerce" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="e-commerce">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-shopping-cart"></span></span><span className="nav-link-text ps-1">E commerce</span></div>
                            </a>
                            <ul className="nav collapse" id="e-commerce">
                                <li className="nav-item"><a className="nav-link dropdown-indicator" href="#product" data-bs-toggle="collapse" aria-expanded="false" aria-controls="e-commerce">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Product</span></div>
                                </a>
                                    <ul className="nav collapse" id="product">
                                        <li className="nav-item"><a className="nav-link" href="app/e-commerce/product/product-list.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Product list</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="app/e-commerce/product/product-grid.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Product grid</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="app/e-commerce/product/product-details.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Product details</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link dropdown-indicator" href="#orders" data-bs-toggle="collapse" aria-expanded="false" aria-controls="e-commerce">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Orders</span></div>
                                </a>
                                    <ul className="nav collapse" id="orders">
                                        <li className="nav-item"><a className="nav-link" href="app/e-commerce/orders/order-list.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Order list</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="app/e-commerce/orders/order-details.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Order details</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/e-commerce/customers.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Customers</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/e-commerce/customer-details.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Customer details</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/e-commerce/shopping-cart.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Shopping cart</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/e-commerce/checkout.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Checkout</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/e-commerce/billing.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Billing</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/e-commerce/invoice.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Invoice</span></div>
                                </a>
                                </li>
                            </ul><a className="nav-link dropdown-indicator" href="#e-learning" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="e-learning">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-graduation-cap"></span></span><span className="nav-link-text ps-1">E learning</span><span className="badge rounded-pill ms-2 badge-soft-success">New</span></div>
                            </a>
                            <ul className="nav collapse" id="e-learning">
                                <li className="nav-item"><a className="nav-link dropdown-indicator" href="#course" data-bs-toggle="collapse" aria-expanded="false" aria-controls="e-learning">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Course</span></div>
                                </a>
                                    <ul className="nav collapse" id="course">
                                        <li className="nav-item"><a className="nav-link" href="app/e-learning/course/course-list.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Course list</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="app/e-learning/course/course-grid.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Course grid</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="app/e-learning/course/course-details.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Course details</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="app/e-learning/course/create-a-course.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create a course</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/e-learning/student-overview.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Student overview</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/e-learning/trainer-profile.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Trainer profile</span></div>
                                </a>
                                </li>
                            </ul><a className="nav-link" href="app/kanban.html" role="button">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fab fa-trello"></span></span><span className="nav-link-text ps-1">Kanban</span></div>
                            </a><a className="nav-link dropdown-indicator" href="#social" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="social">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-share-alt"></span></span><span className="nav-link-text ps-1">Social</span></div>
                            </a>
                            <ul className="nav collapse" id="social">
                                <li className="nav-item"><a className="nav-link" href="app/social/feed.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Feed</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/social/activity-log.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Activity log</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/social/notifications.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Notifications</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/social/followers.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Followers</span></div>
                                </a>
                                </li>
                            </ul><a className="nav-link dropdown-indicator" href="#support-desk" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="support-desk">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-ticket-alt"></span></span><span className="nav-link-text ps-1">Support desk</span></div>
                            </a>
                            <ul className="nav collapse" id="support-desk">
                                <li className="nav-item"><a className="nav-link" href="app/support-desk/table-view.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Table view</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/support-desk/card-view.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Card view</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/support-desk/contacts.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Contacts</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/support-desk/contact-details.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Contact details</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/support-desk/tickets-preview.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Tickets preview</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/support-desk/quick-links.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Quick links</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="app/support-desk/reports.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Reports</span></div>
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
                            </div><a className="nav-link" href="pages/starter.html" role="button">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-flag"></span></span><span className="nav-link-text ps-1">Starter</span></div>
                            </a><a className="nav-link" href="pages/landing.html" role="button">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-globe"></span></span><span className="nav-link-text ps-1">Landing</span></div>
                            </a><a className="nav-link dropdown-indicator" href="#authentication" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="authentication">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-lock"></span></span><span className="nav-link-text ps-1">Authentication</span></div>
                            </a>
                            <ul className="nav collapse" id="authentication">
                                <li className="nav-item"><a className="nav-link dropdown-indicator" href="#simple" data-bs-toggle="collapse" aria-expanded="false" aria-controls="authentication">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Simple</span></div>
                                </a>
                                    <ul className="nav collapse" id="simple">
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/login.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Login</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/logout.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Logout</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/register.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Register</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/forgot-password.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Forgot password</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/confirm-mail.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Confirm mail</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/reset-password.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Reset password</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/lock-screen.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Lock screen</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link dropdown-indicator" href="#card" data-bs-toggle="collapse" aria-expanded="false" aria-controls="authentication">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Card</span></div>
                                </a>
                                    <ul className="nav collapse" id="card">
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/login.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Login</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/logout.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Logout</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/register.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Register</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/forgot-password.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Forgot password</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/confirm-mail.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Confirm mail</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/reset-password.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Reset password</span></div>
                                        </a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/lock-screen.html">
                                            <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Lock screen</span></div>
                                        </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item"><a className="nav-link" href="pages/authentication/wizard.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Wizard</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="#authentication-modal" data-bs-toggle="modal">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Modal</span></div>
                                </a>
                                </li>
                            </ul><a className="nav-link dropdown-indicator" href="#user" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="user">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-user"></span></span><span className="nav-link-text ps-1">User</span></div>
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
                            </ul><a className="nav-link dropdown-indicator" href="#pricing" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="pricing">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-tags"></span></span><span className="nav-link-text ps-1">Pricing</span></div>
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
                            </ul><a className="nav-link dropdown-indicator" href="#faq" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="faq">
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
                            </ul><a className="nav-link dropdown-indicator" href="#errors" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="errors">
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
                            </ul><a className="nav-link dropdown-indicator" href="#miscellaneous" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="miscellaneous">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-thumbtack"></span></span><span className="nav-link-text ps-1">Miscellaneous</span></div>
                            </a>
                            <ul className="nav collapse" id="miscellaneous">
                                <li className="nav-item"><a className="nav-link" href="pages/miscellaneous/associations.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Associations</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="pages/miscellaneous/invite-people.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Invite people</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="pages/miscellaneous/privacy-policy.html">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Privacy policy</span></div>
                                </a>
                                </li>
                            </ul><a className="nav-link dropdown-indicator" href="#Layouts" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="Layouts">
                                <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="far fa-window-restore"></span></span><span className="nav-link-text ps-1">Layouts</span></div>
                            </a>
                            <ul className="nav collapse" id="Layouts">
                                <li className="nav-item"><a className="nav-link" href="demo/navbar-vertical.html" target="_blank">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Navbar vertical</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="demo/navbar-top.html" target="_blank">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Top nav</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="demo/navbar-double-top.html" target="_blank">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Double top</span><span className="badge rounded-pill ms-2 badge-soft-success">New</span></div>
                                </a>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="demo/combo-nav.html" target="_blank">
                                    <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Combo nav</span></div>
                                </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="settings mb-3">
                        <div className="card shadow-none">
                            <div className="card-body alert mb-0" role="alert">
                                <div className="btn-close-falcon-container"><button className="btn btn-link btn-close-falcon p-0" aria-label="Close" data-bs-dismiss="alert"></button></div>
                                <div className="text-center"><img src="assets/img/icons/spot-illustrations/navbar-vertical.png" alt="" width="80" />
                                    <p className="fs--2 mt-2">Loving what you see? <br />Get your copy of <a href="#!">Falcon</a></p>
                                    <div className="d-grid"><a className="btn btn-sm btn-purchase" href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/" target="_blank">Purchase</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            }
           
        </nav>
    )
}


