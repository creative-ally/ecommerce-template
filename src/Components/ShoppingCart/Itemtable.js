import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import axios from 'axios';

const Itemtable = ({ item }) => {
    const { _id, name, image, price, quantity } = item;
    const [count, setCount] = useState(quantity);


    const handledelete = () => {
        ( async () => {
            await axios.delete(`http://localhost:5000/api/cart/${_id}`)
            .then( res => {
                console.log(res)
                if(res.status === 200){
                    console.log('data deleted')
                }
            })
        })()
    }


    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <tr className=''>
            <td class="mr-3 w-24 h-24"><img className='h-24' src={image} alt="" /></td>
            <td class="pl-5 text-lg font-medium text-[#252525] bg[]">{name}</td>
            <td class="pl-5 text-lg font-medium text-[#252525] bg[]">{price} Taka</td>
            {
                _id &&
                <td class="pl-5"> <p className='text-lg text-center text-[#252525] bg-[#F5F7FA] p-2'>Qty <span onClick={handleDecrement} className='px-2 cursor-pointer'><RemoveIcon /></span> {count} <span onClick={handleIncrement} className='px-2 cursor-pointer'><AddIcon /></span><HighlightOffIcon className='text-primary cursor-pointer text-right' onClick={handledelete} /></p></td>
            }
        </tr>
    );
};

export default Itemtable;