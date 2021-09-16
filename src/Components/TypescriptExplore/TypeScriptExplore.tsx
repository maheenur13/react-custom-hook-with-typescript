import React from 'react';
import TextField from './TextField';

const TypeScriptExplore:React.FC = () => {
    return (
        <div>
            <TextField  inputClickHandler = {e=>{
                console.log(e)
            }}
            // dragTrueOrFalse={true}
            />
        </div>
    );
};

export default TypeScriptExplore;