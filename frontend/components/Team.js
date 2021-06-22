import React from 'react'
import Image from 'next/image'

const Team = ({bio}) => {

    return (
        <div className="parallax-container">
            <div className="image image-background">
                <img src={bio.imageTeam} width={700} height={500} alt="Comono Team"/>
            </div>

            <div className="image image-middle">
                <img src="/top-wave.svg" />
            </div>

            <div className="image image-foreground">
                <h2>{bio.title}</h2>
                {/* <img src="/bottom-wave.svg" /> */}
            </div>

            <style jsx>{`
                .parallax-container{
                    background-color: gray;
                    width:100%;
                    height:900px;
                    perspective: 8px;
                    perspective-origin: 50%;
                    outline: solid 1px red;
                    overflow-x:hidden;
                    overflow-y:scroll;
                    position:relative;
                }
                .image{
                    position:absolute;
                    
                    
                }
                .image-background{
                    outline: solid 1px green;
                    width:100%;
                    bottom:10px;
                    top:0
                    
                }

                .image-background > img {
                    width:100%;
                    height:75%;
                }
                
                .image-middle{
                    width:100%;
                    outline:solid 1px blue;
                    top:0;
                    height:110px;
                }

                .image-foreground{
                    width:100%;
                    outline:solid 1px orange;
                    bottom:0;
                    background-image:url('/bottom-wave.svg');
                    background-size: cover;
                    height:450px;
                }

                img{
                    width:100%;
                   
                }
            
            `}</style>


         
  
            
        </div>
    )
}

export default Team
