import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
export default function Layout({ children }) {
    const [showSideNav, setShowSideNav] = useState(true)

    return (
        <>
            <main className="main" id="top">
                <div className="container-fluid" data-layout="container">
                   
 
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
                  

                </div>
            </main>

        </>
    )
} 
