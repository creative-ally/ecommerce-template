import React, { useEffect, useState } from 'react';
import { TiArrowUpOutline } from "react-icons/ti";
// import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

const BacktoTop = () => {
    const [backtoTop, setBacktoTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setBacktoTop(true)
            } else {
                setBacktoTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            {
              backtoTop &&  <button  className='m-1 text-4xl fixed bottom-20 right-10 text-red-600 opacity-80' onClick={scrollUp}><TiArrowUpOutline/></button>
            }
            
        </div>
    );
};

export default BacktoTop;