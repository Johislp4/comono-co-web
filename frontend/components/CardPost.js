import React from 'react'
import { urlFor } from '../lib/sanity';

const CardPost = ({ post }) => {
  return (
    <article className="mini-card">
      <div>
        <p><span>{new Date(post.publishedAt).toLocaleDateString()}</span></p>
        <h2>{post.title}</h2>
      </div>
      <div className="mini-article-meta">
        <div className="author-avatar">
          <img
            src={urlFor(post.authorImage).url()}
            alt={post.name}
            className='img-author'
          />
        </div>
        <p className="author-name">{post.name}</p>
      </div>

      <style jsx>{`
      .mini-card {
        display: flex;
        justify-content: space-between;
        max-width: 250px;
        min-height: 300px;
        padding: 1.5rem;
        border-radius: 16px;
        background: white;
        flex-direction: column;
        transition: .2s;
        margin: 0;
        box-shadow: 1px -1px 7px -1px rgba(3, 0, 0, 0.65);
        transform: rotate(353deg);
        cursor:pointer;
      }
  
      .mini-card:focus-within,
      .mini-card:hover {
        transform: translate(0, -1rem);
      }
  
      .mini-card:focus-within~.mini-card,
      .mini-card:hover~.mini-card {
        transform: translateX(90px);
      }
  
      .mini-card:not(:first-child) {
        margin-left: -100px;
      }
  
      .mini-card h2 {
        font-size: 20px;
        margin: .25rem 0 auto;
        color: #AC3F3F;
        font-size:1.5rem;
      }
  
      .mini-article-meta {
        margin: 2rem 0 0;
        display: grid;
        grid-template-columns: 60px 1fr;
        align-items: center;
        color: #AC3F3F;
      }
  
      .mini-article-meta .author-avatar img {
        width: 40px;
        height: 40px;
      }
  
      .author-avatar img {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin: 12px 10px;
        filter: grayscale(100%);
      }
    
      `}</style>
    </article>
  )
}

export default CardPost