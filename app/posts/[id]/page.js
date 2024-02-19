import Comments from '@/app/components/Comments';
import getAllPosts from '@/app/lib/getAllPosts';
import getPost from '@/app/lib/getPost';
import getPostComment from '@/app/lib/getPostComment';
import React, { Suspense } from 'react'

export async function generateMetadata( {params} ) {
    const {id} = params; 
    const post = await getPost(id);

    return {
        title: post.title,
        descritption: post.descritption,
    };
}

async function PostPage({ params }) {
    const {id} = params; 
    const post = await getPost(id);
    const commentsPromise = getPostComment(id);
    //const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  return (
    <div className='mt-6'>
        <h1 className='text-blue-500'>{post.title}</h1>
        <p className='mt-3'>{post.body}</p>
        <hr />
        <Suspense fallback="<h1>Loading Comments</h1>">
          <Comments promise={commentsPromise}/>
        </Suspense>
    </div>
  )
}

export async function gererateStaticParams(){
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),

  })); 
}

export default PostPage