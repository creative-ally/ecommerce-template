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
        <div className='bg-white pb-2'>
            <div>
                <h1 className='pt-6 text-center font-semibold text-xl'>Dining</h1>
            </div>
            <div className='md:grid grid-cols-3 gap-6 mx-12 my-14'>

                {
                    allDining.map((dining, index) =>
                        <Link to={`/dining/${dining.id}`} key={index}>
                            <div className='p-4 rounded-lg hover:shadow-2xl'>
                                <img className='rounded-md shadow-xl' src={dining.image} alt="" />
                                <p className='py-4 text-center text-lg'>{dining.name}</p>
                            </div>
                        </Link>
                    )
                }


            </div>
        </div>
    );
};

export default AllDining;