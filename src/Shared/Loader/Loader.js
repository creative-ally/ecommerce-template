import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center top-0' style={{height: '100vh'}}>
            <HashLoader color="#230A00" />
        </div>
    );
};

export default Loader;