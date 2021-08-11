import React from 'react'
import { urlFor } from '../lib/sanity';

const CardPost = ({ post }) => {
	return (
		<article>
			<div
				className='img-container'
				style={{
					backgroundImage: `url(${post.mainImage.asset.url})`
				}}
			>
			</div>
			<div>
				<h2>{post.title}</h2>
				<p>{post.summary}</p>
				<div className="mini-article-meta">
					<div className="author-info">
						<img
							src={urlFor(post.authorImage).url()}
							alt={post.name}
							className='img-author'
						/>
							<p className="author-name">{post.name}</p>
					</div>
					<p><span>{new Date(post.publishedAt).toLocaleDateString()}</span></p>
				</div>

			</div>

			<style jsx>{`
    
        article{
          width:300px;
          margin:1rem;
          background-color: #f4f4f4;
          cursor:pointer;
					border-radius:20px;
					color:black;
        }

        .img-container{
          height:200px;
          background-position: top;
          background-repeat: no-repeat;
          background-size: cover;
					position: relative;
    			top: -20px;
    			left: 20px;
					margin-top: 3rem;
        }

        article div:nth-child(2){
          padding:1rem;
        }

        h2 {
          margin-bottom:1rem;
					color:#AC3F3F;
        }

        p{
          margin-bottom:1rem;
        }
        
				.mini-article-meta {
					margin: 2rem 0 0;
				  display:flex;
				  justify-content:space-between;
					align-items: flex-end
				}
				
				.author-info{
					display:flex;
					align-items: flex-end;
					color:#AC3F3F;
				}
		
				.author-info img {
					border-radius: 50%;
					width: 40px;
					height: 40px;
					margin: 12px 10px;
					filter: grayscale(100%);
				}
				
        span{
          font-size:0.875rem;
        }

				@media (max-width: 320px) {
					article{
						width:250px;
					}
				}
       `}</style>
		</article>
	)
}

export default CardPost