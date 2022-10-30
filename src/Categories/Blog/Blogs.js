import React from 'react';

const Blogs = ({blog}) => {
   const {image,date,title,description}=blog;
console.log(blog)
    return (
        <div className='mt-5'>
            <img src={image} alt="" />
            <p className='text-[red] my-2'>{date}</p>
            <p className='my-2 text-lg'>{title}</p>
            <p className='font-sans text-slate-600'>{description}</p>
            <p className='text-[red] text-md mt-3'>READ MORE</p>
        </div>
    );
};

export default Blogs;