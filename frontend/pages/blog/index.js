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
    <>
      <h1>Blog page</h1>

      {blogData && blogData.map((post, index) => (
        <Link href={'/blog/' + post.slug.current} key={index}>
          <article>
            <h2>{post.title}</h2>
            <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt} />
            <p>{post.summary}</p>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          </article>
        </Link>
      ))}

      <style jsx>{`
      
          
       `}</style>
    </>


  )
}

export default Blog