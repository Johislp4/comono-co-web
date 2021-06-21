import React from 'react'
import Image from 'next/image'

const Team = ({bio}) => {

    return (
        <div>
            <h2>{bio.title}</h2>
            <img src={bio.imageTeam} width={700} height={500} alt="Comono Team"/>
            
            
        </div>
    )
}

export default Team
