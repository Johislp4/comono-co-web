import React, { useState, useEffect } from "react"
import { sanityClient } from "../lib/sanity"
import CardBlog from './CardBlog'
import Link from 'next/link'
import ES from "../utils/ES"
import EN from "../utils/EN"

const Blog = ({ locale }) => {

	const [blogData, setBlogData] = useState([])

	const text = locale === 'es-CO' ?  ES  : EN

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
							<p>{text.blog.title}</p>
							<p>{text.blog.titleTwo}</p>
						</div>
						<p>{text.blog.message} <br />{text.blog.messageTwo}</p>
					</div>
				</div>
				<div className="right-side">
					<div className="card-container">
						{blogData  
						?
						blogData.map((post, index) => {
							return (
								<Link href={`/blog/${post?.slug?.current}`} passHref key={index}> 
								<a>
									<CardBlog post={post} key={index} />
								</a>
								</Link>
							)
						})

						: 'null'
						}
					</div>
					<Link href="/blog" passHref>
						<a>
							<span className="btn">{locale === 'es-CO' ? 'Ver todos' : 'More'}</span>
							<span>
								<img src="/row-right.svg" alt="row-right" />
							</span>
						</a>
					</Link>

				</div>
			</div>

			<style jsx>{`
			.bg-green {
				background: #b3d172;
			}
			
			.container {
				display: flex;
				max-width: 64rem;
				height: 100vh;
				margin: 0 auto;
			}
			
			.container > div {
				width: 50%;
				margin: 0 auto;
			}
		
			.container > div:first-child {
				display: flex;
				position: relative;
				border-right: 2px solid black;
				align-items: center;
			}
			
			.container > div:nth-child(2) {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			
			.section-title {
				color: white;
				font-size: 12rem;
				font-weight: bolder;
				transform: rotate(270deg);
				position: absolute;
				left: -8rem;
				margin-left: 2rem;
			}
			
			.section-text {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 200px;
				margin-left: 9rem;
				margin-top: 9rem;
				z-index: 200;
			}
			
			.section-text p:first-child {
				font-size: 2.5rem;
			}
			
			.section-text > div p:nth-child(2) {
				font-size: 3rem;
				font-weight: bold;
			}
			
			.section-text > p {
				font-weight: 500;
			}
			
			.card-container {
				display: flex;
				margin-left: -1.5rem;
				margin-bottom: 2rem;
				flex-wrap: wrap;
			}
			
			.btn {
				font-size: 1.5rem;
				font-weight: 600;
				margin-right: 8px;
			}
			a {
				align-self: flex-end;
				color:black;
			}
			
			@media (max-width: 768px) {
				.container {
					flex-direction: column;
					padding-top: 5rem;
					height: auto;
					padding-bottom: 3rem;
				}
			
				.container > div {
					width: 100%;
				}
			
				.container > div:first-child {
					height: 26rem;
    				border-bottom: 2px solid black;
   					 border-right: none;
				}
			
				.container > div:nth-child(2) {
					margin-top: 8rem;
				}
			
				.section-text {
					margin-top: -50px;
					height: 150px;
				}
			
				.card-container {
					flex-direction: column;
					align-items: center;
					margin-top: -10rem;
					flex-wrap: wrap;
				}
				a {
					margin-right: 2rem;
				}
			}
			
      `}</style>
		</div>
	)
}

export default Blog