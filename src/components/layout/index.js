import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
export default function Layout({ children }) {
    const [showSideNav, setShowSideNav] = useState(true)

    return (
        <>
            <main className="main" id="top">
                <div className="container-fluid" data-layout="container">
                    <Header
                        showSideNav={showSideNav}
                        setShowSideNav={setShowSideNav}
                    />

                    <div>
                        <div>
                            <Sidebar
                                showSideNav={showSideNav}
                                setShowSideNav={setShowSideNav}
                            />
                        </div>
                        <div className={`${showSideNav == true ? 'navbar-style' : ''} `}>
                            {children}
                        </div>
                    </div>

                </div>
            </main>

        </>
    )
} 
