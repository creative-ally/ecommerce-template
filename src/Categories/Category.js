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
        <div className='container'>
            <h1>{category}</h1>
            {
                loading ? <LoaderTop /> :
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-9'>
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