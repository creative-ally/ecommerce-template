import React from 'react';
import { HashLoader } from 'react-spinners';

const LoaderTop = () => {
    return (
        <div className='flex justify-center top-20' style={{height: '100vh'}}>
            <HashLoader color="#230A00" />
        </div>
    );
};

export default LoaderTop;