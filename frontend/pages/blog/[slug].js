import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { sanityClient, urlFor } from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react"

const Post = () => {
  const router = useRouter()
  const slug = router.query.slug
  const [singlePost, setSinglePost] = useState([])

  useEffect(() => {
    sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            publishedAt,
           'name': author->name,
           'authorImage': author->image
            }`)
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singlePost) return <div>Loading...</div>

  return (
    <>
      <h1>{singlePost.title}</h1>
      <img src={urlFor(singlePost.mainImage).url()} alt={singlePost.title} />
      <div>-------------------BLOCK CONTENT---------------</div>
      <BlockContent
        blocks={singlePost.body}
        projectId='af9rpnm9'
        dataset='production'
      />

      <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} />
      <p>{singlePost.name}</p>
      <p>{new Date(singlePost.publishedAt).toLocaleDateString()}</p>

      <style jsx>{`

          
      `}</style>
    </>
  )
}

export default Post