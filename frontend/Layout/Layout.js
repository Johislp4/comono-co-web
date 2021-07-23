import React from 'react'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
import CallToAction from '../components/CallToAction'

const Layout = ({children}) => {
    return (
        <div className="base-layout">
        <NavBar />
        <CallToAction />
            {children}
        {/* <Footer /> */}
        </div>
    )
}

export default Layout
