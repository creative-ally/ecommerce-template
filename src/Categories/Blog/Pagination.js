import React from 'react';
import "./Pagination.css"

const Pagination = ({totalPosts,postPerPage,setCurrentPage,currentPage}) => {

    const pages=[];

    for(let i=1; i<= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }
    return (
        <div>
            {
                pages.map((page,index)=>{
                    return <button className={page===currentPage? 'active' : ""} onClick={()=>{
                     setCurrentPage(page)    
                    }} key={index}>{page}</button>  
                })
            }
        </div>
    );
};

export default Pagination;