import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Itemtable = ({item}) => {
    const {_id, name, image, price, quantity} = item;
    const [count, setCount] = useState('')

    const handleDecrement = () => {
        setCount(quantity - 1)
    }

    console.log(count)
    return (
        <tr className=''>
            <td class="mr-3 w-20"><img src={image} alt="" /></td>
            <td class="pl-5 text-lg font-medium text-[#252525] bg[]">{name}</td>
            <td class="pl-5 text-lg font-medium text-[#252525] bg[]">{price} Taka</td>
            <td class="pl-5"> <p className='text-lg text-center text-[#252525] bg-[#F5F7FA] p-2'>Qty <span onClick={() => setCount(quantity -1)} className='px-2 cursor-pointer'><RemoveIcon /></span> {quantity} <span className='px-2 cursor-pointer'><AddIcon /></span><HighlightOffIcon className='text-primary cursor-pointer text-right' /></p></td>
        </tr>
    );
};

export default Itemtable;