import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
export default function Layout({ children }) {
    const [showSideNav, setShowSideNav] = useState(true)

    const [url, setUrl] = useState()

    const path = useLocation()

    useEffect(() => {
        const pageUrl = path.pathname.split("/")[1];
        setUrl(pageUrl)
    }, [path])

    return (
        <Fragment>



            <main className="main" id="top">
                <div className="container-fluid" data-layout="container">

                    {url === 'simple-login' || url === 'card-login' ? (
                        <>
                           {children}
                        </>
                    ) : 
                        <> 
                            <Sidebar
                                showSideNav={showSideNav}
                                setShowSideNav={setShowSideNav}
                            />

                            <div className={`${showSideNav == true ? 'navbar-style' : ''} `}>
                                <Header
                                    showSideNav={showSideNav}
                                    setShowSideNav={setShowSideNav}
                                />
                                {children}
                            </div>
                        </>
                     } 

                </div>
            </main>

        </Fragment>
    )
} 
