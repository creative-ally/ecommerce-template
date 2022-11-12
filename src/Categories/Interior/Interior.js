import React, { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import InteriorProjects from './InteriorProjects';

const Interior = () => {
    const [interiors,setInteriors]=useState([])
    useEffect(()=>{
        fetch("interior.json")
        .then(res=>res.json())
        .then(data=>setInteriors(data))
    },[])
    // console.log(interiors)
    return (
        <div className='bg-white '>
            <h1>All Interior Project</h1>
           {
            interiors.map((interior=><InteriorProjects key={interior.id} interior={interior}></InteriorProjects>))
           }
        </div> 
    );
};

export default Interior;
