import React from 'react';
import "./loading.css"

const Loading = () => {
    return (
        <div className='bottom'>
            <div className='loading'>
                <div className='lds-dual-ring'></div>
            </div>
        </div>
    );
};

export default Loading;