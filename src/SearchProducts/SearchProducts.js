import React from 'react';

const SearchProducts = ({searchProduct}) => {
    const {image,name,category,subcategory}=searchProduct;
    // console.log(searchProducts[0].name)
    return (
    <div>
            <div><img src={image}></img></div>
            name : {name};
            category : {category};
            subcategory: {subcategory};
    </div>
    
    );
};
export default SearchProducts;