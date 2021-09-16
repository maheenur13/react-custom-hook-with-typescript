import React from 'react';
import TextField from './TextField';

const TypeScriptExplore:React.FC = () => {
    return (
        <div>
            <TextField>
                {(drag,setDrag) =>(<div>{drag}</div>)}
            </TextField>
        </div>
    );
};

export default TypeScriptExplore;