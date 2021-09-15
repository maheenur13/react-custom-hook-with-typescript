import React, { useEffect, useState } from 'react';

const UseOnlineCustom = () => {

    const [online, setOnline] = useState(navigator.onLine);
    console.log('first one', online)
    const offlineHandler = () => {
        setOnline(false);
    }
    const onLineHandler = () => {
        setOnline(true);
    }
    useEffect(() => {
        window.addEventListener('online', onLineHandler);
        window.addEventListener('offline', offlineHandler);
        return () => {
            window.removeEventListener('online', onLineHandler)
            window.removeEventListener('offline', offlineHandler)
        }

    }, [online])
    console.log('second one', online)
    return (
        <div>
            {online}
            {/* <button  >Click</button> */}
        </div>
    );
};

export default UseOnlineCustom;