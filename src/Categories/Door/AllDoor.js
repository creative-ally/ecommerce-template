import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllDoor = () => {
    const [doors, setDoors] = useState([]);

    useEffect(() => {
        (async () => {
            await axios.get('http://localhost:8000/category')
                .then(res => {
                    console.log(res)
                    setDoors(res.data)
                })
        })()
    }, [])

    console.log(doors)
    return (
        <div>
            <h2 className='text-4xl font-bold text-center py-10'>Door</h2>
            <div className='md:grid grid-cols-3 px-20'>
                {
                    doors.map((door, index) =>
                        <Link to={`/doors/${door.id}`} key={index}>
                            <img src={door.image} alt="" />
                            <div className='flex justify-center mt-2 mb-8'>
                                <h2 className='text-lg text-center'>{door.name}</h2>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default AllDoor;