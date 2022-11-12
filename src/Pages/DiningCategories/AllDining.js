import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllDining = () => {

    const [allDining, setAllDining] = useState([]);

    useEffect(() => {
        (async () => {
            await axios.get('http://localhost:8001/category')
                .then(res => {
                    console.log(res)
                    setAllDining(res.data)
                })
        })()
    }, [])


    return (
        <div className='container'>
            <div>
                <h1>Dining</h1>
            </div>
            <div className='md:grid grid-cols-3 gap-6 mx-12 my-14'>

                {
                    allDining.map((dining, index) =>
                        <Link to={`/dining/${dining.id}`} key={index}>
                            <div className='product-card'>
                                <img className='' src={dining.image} alt="" />
                                <p>{dining.name}</p>
                            </div>
                        </Link>
                    )
                }


            </div>
        </div>
    );
};

export default AllDining;