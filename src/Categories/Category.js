import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderTop from '../Shared/Loader/LoaderTop';
import InCategory from './InCategory';

const Category = () => {
    const { category } = useParams();
    const [categories, setCategory] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/api/product/category/${category}`)
                .then(res => {
                    console.log(res)
                    setCategory(res.data.data)
                })
        })()
    }, [category]);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, [2000])
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold text-center py-10'>{category}</h2>
            {
                loading ? <LoaderTop /> :
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-5 md:px-10 lg:px-20'>
                        {
                            categories.map((c) =>
                                <InCategory key={c._id} c={c}></InCategory>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default Category;