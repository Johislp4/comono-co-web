import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {

    const router = useRouter()

    return(
        <h1>Post page, slug: {router.query.slug}</h1>
    )
}

export default Post