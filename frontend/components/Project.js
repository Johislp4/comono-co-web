import React, { useEffect } from 'react'


const projectImages = ['11', '12', '13']
const projectText = ["Tex1 ", "Tex2", "Text3"]

const Project = () => {
    const [image, setImage] = React.useState(1)

    const element = process.browser && document.querySelector('.project-text')

 

    
    let target = process.browser && document.querySelectorAll('.text1');


    const isIntersecting = entry => {
        console.log(entry, 'this is entry from isIntersection?????')
        return entry.isIntersecting
    }

    const action = entry => {
        // console.log(entry)
        // console.log('holi')

        if(isIntersecting){
            console.log(entry.target.classList[2])
            console.log('bla bla bla')
            const srcImage = entry.target.classList[2]
            setImage(srcImage)
        }
    }

   useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.filter(isIntersecting).forEach(action)
    }, { threshold: 0.70} )

    target.forEach(element => element && observer.observe(element))
 
   }, [element])


    return (
        <div className="article-project">
            <div className="container-project-image">
                <div className="project-image">
                    <img src={`/${image}.jpg`}/>
                </div>
                <figcaption> 1/10 </figcaption>
            </div>
            <div className="project-text">
                <div className="text1 1"><h1>Hello</h1> <p>This is a text test</p> </div>
                <div className="text1 2"><h1>Hello</h1> <p>This is a text test</p> </div>
                <div className="text1 3"><h1>Hello</h1> <p>This is a text test</p> </div>
                <div className="text1 4"><h1>Hello</h1> <p>This is a text test</p> </div>
            </div>


        <style jsx>{`

            .article-project{
                width:100%;
                display:flex;
                border: solid thin gray;
                border-radius: 12px;
                margin: 1rem;
                height: 500px;
                width:100%;
            }

            .container-project-image{
                border: solid thin hotpink;
                width:50%;
            }

            .project-text{
                outline: solid 4px  salmon;
                width:50%;
                overflow: scroll;
            }

            .project-text > div {
                outline: solid 4px black;
                height:100%
            }

            img{
                width: 70px;
            }
        `}</style>
        </div>
    )
}

export default Project
