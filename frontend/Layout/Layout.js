import React from 'react'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"

const Layout = ({children}) => {
    return (
        <div className="base-layout">
        <NavBar />
            {children}
        {/* <Footer /> */}
        </div>
    )
}

export default Layout
