import React, { useState, useEffect } from "react"
import { sanityClient } from "../lib/sanity"
import CardPost from './CardPost'

const Blog = ({ locale }) => {

	const [blogData, setBlogData] = useState([])

	useEffect(() => {
		sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc){
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            summary,
            publishedAt,
						'name': author->name,
           'authorImage': author->image
        }[0...3]`)
			.then((data) => setBlogData(data))
			.catch(console.error)
	}, [])

	return (
		<div className="bg-green">
			<div className="container">
				<div>
					<p className="section-title" >Blog</p>
					<div className="section-text">
						<div>
							<p>Popular</p>
							<p>By month</p>
						</div>
						<p>Sponsored by <br /> Frontend Masters</p>
					</div>
				</div>
				<div>
					<div className="card-container">
						{blogData.map((post, index) => (
							<CardPost post={post} key={index} />
						))
						}
					</div>
					<a>
						<span className="btn">{locale === 'es-CO' ? 'Ver todos' : 'More'}</span>
						<span>
							<img src="/row-right.svg" alt="row-right" />
						</span>
					</a>
				</div>
			</div>

			<style jsx>{`
			.bg-green{
				background:#B3D172;
			}

			.container{
				display:flex;
				max-width:60rem;
				height: 100vh;
				margin: 0 auto;
			}

			.container > div:first-child{
				display:flex;
				position:relative;
				width:50%;
				border-right: 2px solid black;
				align-items: center;
			}

			.container > div:nth-child(2){
				display: flex;
				flex-direction: column;
				justify-content: center;
				width:50%;
			}

			.section-title{
				color: white;
				font-size: 12rem;
				font-weight: bolder;
				transform: rotate(270deg);
				position: absolute;
    		left: -8rem;
    		margin-left: 2rem;
			}

			.section-text{
				display:flex;
				flex-direction:column;
				justify-content:space-between;
				height: 200px;
				margin-left: 9rem;
				margin-top: 9rem;
				z-index: 200;	
			}

			.section-text p:first-child{
				font-size:2.5rem
			}

			.section-text > div p:nth-child(2){
				font-size:3rem;
				font-weight:bold;
			}

      .card-container {
				display: flex;
				margin-left: -1.5rem;
				margin-bottom:2rem;
			}

			.btn{	
				font-size: 1.5rem;
				font-weight:600;
				margin-right: 8px;
			}
			a{
				align-self: flex-end;
			}

      `}</style>
		</div>
	)
}

export default Blog