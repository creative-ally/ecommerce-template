import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Door from './Door';

const AllDoor = () => {
    const [doors, setDoors] = useState([]);

    useEffect(() => {
        (async () => {
          const {data} =  await axios.get('http://localhost:5000/api/product/Office')
                .then(res => {
                    console.log(res)
                    setDoors(res.data.data)
                })
        })()
    }, [])

    return (
        <div>
            <h1>Door</h1>
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