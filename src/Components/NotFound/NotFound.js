import React from 'react';
import '../NotFound/NotFound.css'

const NotFound = () => {
    return (
        <div className=' bg-dark text-secondary'>
            <div className='w-75 mx-auto'>
                <h1 className='notfound'>404 Error!!!</h1>
                <h1 className='notfound'>Page Not Found..</h1>
            </div>
        </div>
    );
};

export default NotFound;