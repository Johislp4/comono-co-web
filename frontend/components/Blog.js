import React, { useState, useEffect } from "react"
import { sanityClient } from "../lib/sanity"
import CardPost from './CardPost'

const Blog = () => {

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
			<div className="main-container">
				<div>
					<p>Blog</p>
					<div>
						<p>Popular</p>
						<p>By month</p>
					</div>
					<p>Sponsored by Frontend Masters</p>
				</div>
				<div>
					<div className="card-container">
						{blogData.map((post, index) => (
							<CardPost post={post} key={index} />
						))
						}
					</div>
					<button>Ver todos</button>
				</div>
			</div>

			<style jsx>{`
      .card-container {
				padding: 3rem;
				display: flex;
			}  
      `}</style>

		</div>
	)
}

export default Blog