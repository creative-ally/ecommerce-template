import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Door from './Door';

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

    return (
        <div>
            <h2 className='text-4xl font-bold text-center py-10'>Door</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-5 md:px-10 lg:px-20'>
                {
                    doors.map((door, index) =>
                        <Door key={index} door={door}></Door>
                    )
                }
            </div>
        </div>
    );
};

export default AllDoor;