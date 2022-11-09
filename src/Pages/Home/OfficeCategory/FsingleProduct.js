
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const FsingleProduct = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[2]

    console.log(id)

    const [product, setProduct] = useState([]);

    useEffect(() => {

        // fetch(`http://localhost:5000/singleproduct/${id}`)
        // .then(res=>res.json())
        // .then(data => setProduct(data))
        const singleProduct = async () => {
            try {

                const response = await axios.get(
                    `http://localhost:5000/api/product/office/${id}`)
                setProduct(response.data)
            }


            catch (err) {
                console.log(err)
            }
        }
        singleProduct();
    }, [id])

    console.log(product)



    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap items-center">
                        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">PRODUCT NAME</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mt-2 mb-3">{product.name}</h1>

                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Color</span>
                                <span class="ml-auto text-gray-900">{product.color}</span>
                            </div>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Material</span>
                                <span class="ml-auto text-gray-900">{product.material}</span>
                            </div>
                            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span class="text-gray-500">Quantity</span>
                                <span class="ml-auto text-gray-900">4</span>
                            </div>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-gray-900">{product.price}</span>
                                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
                    
                    <div className='mt-[-40px] mb-8'>
                    <h2 class="text-3xl title-font text-gray-500 tracking-widest border-b mb-4 py-3 border-gray-200">Description</h2>

                    <p class="leading-relaxed">{product.description}</p>
                    </div>

                    </div>
                    

                </div>
            </section>
        </div>
    )
};

export default FsingleProduct;