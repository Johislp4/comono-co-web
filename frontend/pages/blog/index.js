import React, { useState, useEffect } from 'react'
import { sanityClient } from "../../lib/sanity";
import Link from 'next/link'

const Blog = () => {

  const [blogData, setBlogData] = useState([])
  const [search, setsearch] = useState("")

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
            publishedAt
        }`)
      .then((data) => setBlogData(data))
      .catch(console.error)
  }, [])

  let filteredPosts = blogData.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for something you like"
          value={search}
          onChange={(e) => { setsearch(e.target.value) }}
        />
      </div>
      <div className='container'>
        {filteredPosts && filteredPosts.map((post, index) => (
          <Link href={'/blog/' + post.slug.current} key={index}>
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
                <p><span>{new Date(post.publishedAt).toLocaleDateString()}</span></p>
              </div>
            </article>
          </Link>

        ))}
      </div>

      <style jsx>{`
        .container{
          max-width:60rem;
          margin:0 auto;
          display:flex;
          flex-wrap:wrap;
          justify-content:space-around;
        }

        .search-bar{
          max-width:60rem;
          margin:0 auto;
          display: flex;
          align-items: baseline;
          justify-content: center;
        }

        .search-bar input{
          width:80%;
          padding:0.5rem;
          margin-top: 2rem;
        }

        article{
          width:300px;
          margin:1rem;
          background-color: #f4f4f4;
          cursor:pointer;
          box-shadow: 0px 5px 20px 1px;
        }

        article div:nth-child(1){
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
    </>
  )
}

export default Blog