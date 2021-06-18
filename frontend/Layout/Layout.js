import React from 'react'
import NavBar from '../components/NavBar'

const Layout = ({children}) => {
    return (
        <div className="container">
        <NavBar />
            {children}
        <footer>This is footer</footer>
        </div>
    )
}

export default Layout
