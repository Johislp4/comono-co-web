import React, { useState, useEffect } from 'react'
import { sanityClient } from "../../lib/sanity";
import Link from 'next/link'

const Blog = () => {

  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
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
            publishedAt
        }`)
      .then((data) => setBlogData(data))
      .catch(console.error)
  }, [])

  return (
    <div className='container'>
      {blogData && blogData.map((post, index) => (
        <Link href={'/blog/' + post.slug.current} key={index}>
          <article>
            <div
              className='img-container'
              style={{
                backgroundImage: `url(${post.mainImage.asset.url})`
              }}
            >
              {/* <img
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt} /> */}
            </div>
            <div>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <p><span>{new Date(post.publishedAt).toLocaleDateString()}</span></p>
            </div>
          </article>
        </Link>
      ))}

      <style jsx>{`
        .container{
          max-width:60rem;
          margin:0 auto;
          display:flex;
          flex-wrap:wrap;
          justify-content:space-around;
        }

        article{
          width:300px;
          margin:1rem;
          background-color: #f4f4f4;
          cursor:pointer;
          box-shadow: 0px 5px 20px 1px;
        }

        article div:nth-child(1){
          background:blue;
          height:200px;
          background-position: top;
          background-repeat: no-repeat;
          background-size: cover;
        }

        article div:nth-child(2){
          padding:1rem;
        }

        h2 {
          margin-bottom:1rem;
        }

        p{
          margin-bottom:1rem;
        }
        
        span{
          color:gray;
          font-size:0.875rem;
        }

       `}</style>
    </div>
  )
}

export default Blog