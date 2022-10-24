import React, { useEffect, useState } from 'react';
import Blogs from './Blogs';

const Blog = () => {
    const [blogs,setIBlogs]=useState([])
    useEffect(()=>{
        fetch("blog.json")
        .then(res=>res.json())
        .then(data=>setIBlogs(data))
    },[])
    return (
        <div className=''>
            <h1 className='text-2xl text-center'>Blogs : {blogs.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                blogs.map(blog=><Blogs key={blog.id} blog={blog}></Blogs>)
            }
            </div>

        </div>
    );
};

export default Blog;
