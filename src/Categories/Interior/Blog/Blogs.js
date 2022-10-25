import React from 'react';

const Blogs = ({blog}) => {
   const {image,date,title,description}=blog;
console.log(blog)
    return (
        <div>
            <img src={image} alt="" />
            <p>{date}</p>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default Blogs;