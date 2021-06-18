import React from 'react'

const Banner = ({text}) => {
    return (
        <div style={{maxWidth:"70%", outline:"solid 1px black", fontSize:"3.5rem", height:'auto'}}>
        
            {text}
        </div>
    )
}

export default Banner
