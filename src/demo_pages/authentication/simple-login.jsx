import React from 'react'

export default function SimpleLogin() {
    return (
        <main className="main" id="top">
            <div className="container" data-layout="container">
                <div className="row flex-center min-vh-100 py-6">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <a className="d-flex flex-center mb-4" href="/">
                            <img className="me-2" src="../../../assets/img/icons/spot-illustrations/falcon.png" alt="" width="58" />
                            <span className="font-sans-serif fw-bolder fs-5 d-inline-block">The Park</span>
                        </a>
                        <div className="card">
                            <div className="card-body p-4 p-sm-5">
                                <div className="row flex-between-center mb-2">
                                    <div className="col-auto">
                                        <h5>Log in</h5>
                                    </div>
                                    <div className="col-auto fs--1 text-600"><span className="mb-0 undefined">or</span> <span><a href="register.html">Create an account</a></span></div>
                                </div>
                                <form>
                                    <div className="mb-3"><input className="form-control" type="email" placeholder="Email address" /></div>
                                    <div className="mb-3"><input className="form-control" type="password" placeholder="Password" /></div>
                                    <div className="row flex-between-center">
                                        <div className="col-auto">
                                            <div className="form-check mb-0"><input className="form-check-input" type="checkbox" id="basic-checkbox" checked="checked" /><label className="form-check-label mb-0" for="basic-checkbox">Remember me</label></div>
                                        </div>
                                        <div className="col-auto"><a className="fs--1" href="forgot-password.html">Forgot Password?</a></div>
                                    </div>
                                    <div className="mb-3"><button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Log in</button></div>
                                </form>
                                <div className="position-relative mt-4">
                                    <hr />
                                    <div className="divider-content-center">or log in with</div>
                                </div>
                                <div className="row g-2 mt-2">
                                    <div className="col-sm-6"><a className="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><span className="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> google</a></div>
                                    <div className="col-sm-6"><a className="btn btn-outline-facebook btn-sm d-block w-100" href="#"><span className="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> facebook</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
} 
