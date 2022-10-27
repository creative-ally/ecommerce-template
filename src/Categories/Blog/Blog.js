import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';
import Pagination from './Pagination';

const Blog = () => {
    const [blogs,setIBlogs]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(6)

    useEffect(()=>{
        fetch("blog.json")
        .then(res=>res.json())
        .then(data=>setIBlogs(data))
    },[])

const lastPostIndex = currentPage* postPerPage;
const firstPostIndex= lastPostIndex-postPerPage;
const currentPosts = blogs.slice(firstPostIndex,lastPostIndex)
    return (
        <div className='bg-white mx-32'>
            {/* <h1 className='text-2xl text-center'>Blogs : {currentPosts.length}</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                currentPosts.map(currentPost=><Blogs key={currentPost.id} blog={currentPost}></Blogs>
                )
            }
            </div>
            <Pagination totalPosts={blogs.length} postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}></Pagination>
        </div>
    );
};

export default Blog;
