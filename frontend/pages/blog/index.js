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

  if (blogData.length === 0) return <div>Loading...</div>

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
            value={search}
            onChange={(e) => { setsearch(e.target.value) }}
          />
          <div>
            <img src="/search.png" alt="search" />
            <p>Buscar</p>
          </div>
        </div>
        <div className='container-post'>
          {filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => {
              return <Link href={'/blog/' + post.slug.current} key={index} passHref>
                <a>
                  <CardPost post={post} />
                </a>
              </Link>
            })
          ) : (
            <h2>No hay resultados para la búsqueda</h2>
          )}
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
        position:relative;
        margin-top: 1rem;
      }
      
      .search-bar input {
        width: 100%;
        padding: 1rem 0.5rem;
        background: #7dab32;
        border: 0;
      }

      .search-bar > div{
        width: fit-content;
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top: 30%;
        color: #ffffff;
        margin-right:1rem;
      }

      .search-bar img{
        width:1.2rem;
        margin-right:0.5rem;
      }
      
      h1 {
        color: #ffffff;
        padding-top: 2rem;
        font-size: 3rem;
      }

      h2{
        text-align: center;
        width:100%;
        padding: 2rem 0;
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