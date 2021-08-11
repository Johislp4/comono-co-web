import React, { useState, useEffect } from 'react'
import { sanityClient } from "../../lib/sanity";
import Link from 'next/link'
import CardPost from '../../components/CardPost';

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
            publishedAt,
            'name': author->name,
            'authorImage': author->image
        }`)
      .then((data) => setBlogData(data))
      .catch(console.error)
  }, [])

  let filteredPosts = blogData.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="bg-green">
      <div className="main-container">
        <h1>Artículos</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => { setsearch(e.target.value) }}
          />
        </div>
        <div className='container-post'>
          {filteredPosts && filteredPosts.map((post, index) => (
            <Link href={'/blog/' + post.slug.current} key={index} passHref>
              <a>
                <CardPost post={post} />
              </a>
            </Link>

          ))}
        </div>

      </div>
      <style jsx>{`
      .bg-green {
        background: #b3d172;
      }
      .main-container {
        max-width: 50rem;
        padding: 0 1rem;
        margin: 0 auto;
      }
      .container-post {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      
      .search-bar {
        margin-top: 1rem;
      }
      
      .search-bar input {
        width: 100%;
        padding: 1rem 0.5rem;
        background: #7dab32;
        border: 0;
      }
      
      h1 {
        color: #ffffff;
        padding-top: 2rem;
        font-size: 3rem;
      }
      
      @media (max-width: 760px) {
        .container-post {
          justify-content: center;
        }
      }
       `}</style>
    </div>
  )
}

export default Blog