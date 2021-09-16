import React, { useRef, useState } from 'react';
import styled from 'styled-components';


interface Props {
   
    inputClickHandler:React.ChangeEventHandler<HTMLInputElement>;
    // dragTrueOrFalse: boolean;
}

const Input = styled.input`
padding: 17px 9px;
border: 1px solid tomato;
border-radius:3px;
`
const Text = styled.h6`
color: tomato;
font-size: 2em;
letter-spacing:5px;
`
interface TextNode {
    text:string;
    // ref:string;
}

const TextField : React.FC<Props> = ({inputClickHandler}) => {
    const [count, setCount] = useState<TextNode>({text:''})
    // 
    const [drag, setDrag]= useState<boolean>(true)
    const inputRef = useRef<HTMLInputElement>( null)

    
    return (
        <div>
            <Text> This is an Input  </Text>
            <Input ref={inputRef} onChange={inputClickHandler} draggable={drag}  />
            <p>{count.text}</p>
        </div>
    );
};

export default TextField;