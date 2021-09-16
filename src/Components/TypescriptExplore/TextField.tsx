import React, { useRef, useState } from 'react';
import styled from 'styled-components';




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
interface Props {
   
    // inputClickHandler:React.ChangeEventHandler<HTMLInputElement | boolean>;
    // dragValue:boolean;
    // drag:boolean;
    children:(
        drag:boolean,
        setDrag:React.Dispatch<React.SetStateAction<boolean>>
    )=> JSX.Element | null;




    // dragTrueOrFalse: boolean;
}
const TextField : React.FC<Props> = ({children}) => {
    // const [count, setCount] = useState<TextNode>({text:''})
    // 
    const [drag ,setDrag]= useState(false)
    console.log(drag);
    // const inputRef = useRef<HTMLInputElement>( null)
 
    
    return (
        <div>
            {/* {children(drag,setDrag)} */}
            {/* 
            
            <p>{count.text}</p> */}
            <Text> This is an Input  </Text>
            <Input onChange={()=>{
                
                setDrag(true)
                
                }}  draggable={drag} />
            
        </div>
    );
};

export default TextField;