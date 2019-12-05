import React from 'react'
import spinner from './spinner.gif'

export default () => {
    return (
        <div>
            <img 
                src={spinner} 
                alt='loading...' 
                style={{width: '200p', margin: '40px auto', display: 'block'}} 
            />
        </div>
    );
};
