import React from 'react'

export default function CardLogin() {
    return (
        <main className="main" id="top">
            <div className="container-fluid">
                <div className="row min-vh-100 flex-center g-0">
                    <div className="col-lg-8 col-xxl-5 py-3 position-relative">
                        <img className="bg-auth-circle-shape" src="../../../assets/img/icons/spot-illustrations/bg-shape.png" alt="" width="250" />
                        <img className="bg-auth-circle-shape-2" src="../../../assets/img/icons/spot-illustrations/shape-1.png" alt="" width="150" />
                        <div className="card overflow-hidden z-index-1">
                            <div className="card-body p-0">
                                <div className="row g-0 h-100">
                                    <div className="col-md-5 text-center bg-card-gradient">
                                        <div className="position-relative p-4 pt-md-5 pb-md-7 light">
                                            <div className="bg-holder bg-auth-card-shape" style={{ backgroundImage:"url(../../../assets/img/icons/spot-illustrations/half-circle.png)"}}></div>

                                            <div className="z-index-1 position-relative">
                                                <a className="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder" href="/">The Park</a>
                                                <p className="opacity-75 text-white">With the power of Falcon, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                                            <p className="text-white">Don't have an account?<br />
                                                <a className="text-decoration-underline link-light" href="register.html">Get started!</a></p>
                                            <p className="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75">Read our <a className="text-decoration-underline text-white" href="#!">terms</a> and <a className="text-decoration-underline text-white" href="#!">conditions </a></p>
                                        </div>
                                    </div>
                                    <div className="col-md-7 d-flex flex-center">
                                        <div className="p-4 p-md-5 flex-grow-1">
                                            <div className="row flex-between-center">
                                                <div className="col-auto">
                                                    <h3>Account Login</h3>
                                                </div>
                                            </div>
                                            <form>
                                                <div className="mb-3"><label className="form-label" for="card-email">Email address</label>
                                                    <input className="form-control" id="card-email" type="email" /></div>
                                                <div className="mb-3">
                                                    <div className="d-flex justify-content-between">
                                                        <label className="form-label" for="card-password">Password</label>
                                                    </div>
                                                    <input className="form-control" id="card-password" type="password" />
                                                </div>
                                                <div className="row flex-between-center">
                                                    <div className="col-auto">
                                                        <div className="form-check mb-0"><input className="form-check-input" type="checkbox" id="card-checkbox" checked="checked" />
                                                            <label className="form-check-label mb-0" for="card-checkbox">Remember me</label></div>
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
                    </div>
                </div>
            </div>
        </main>
    )
} 
