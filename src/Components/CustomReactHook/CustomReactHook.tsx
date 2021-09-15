
import React, { useState,useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const CustomReactHook = () => {
    const [name, setName] =useLocalStorage('name','Mahee')
    return (
        <div>
            <input
            type="text"
            value={name}
            onChange={e=>setName(e.target.value)}
            />
        </div>
    );
};

export default CustomReactHook;