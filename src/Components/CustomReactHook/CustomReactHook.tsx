
import React, { useState,useEffect} from 'react';
import useLocalStorage from './useLocalStorage';
import styled from 'styled-components';


const Input = styled.input`
padding:7px 5px;
border:1px solid tomato;
`
const CustomReactHook: React.FC = () => {
    const [name, setName] =useLocalStorage('name','')
    return (
        <div>
            <Input
            type="text"
            value={name}
            onChange={e=>setName(e.target.value)}
            />
        </div>
    );
};

export default CustomReactHook;