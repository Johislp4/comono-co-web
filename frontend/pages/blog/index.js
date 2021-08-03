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
            author->{name},
            publishedAt
        }`)
      .then((data) => setBlogData(data)).catch(console.error)
  }, [])

  return (
    <>
      <h1>Blog page</h1>

      {blogData && blogData.map((post, index) => (
        <Link href={"/blog/" + post.slug.current} key={index}>
          <article  >
            <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt} />
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <p>{post.author.name}</p>
            <p>{post.publishedAt}</p>
          </article>
        </Link>
      ))}
    </>
  )
}

export default Blog