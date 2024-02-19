import React from 'react'

async function getPostComment(id){
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    return result.json();
}


export default getPostComment