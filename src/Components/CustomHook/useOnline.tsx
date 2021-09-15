import { useState, useEffect } from 'react';

const useOnline = () => {
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

    }, [])
    console.log('second one', online)
    return (
        <>
            <button>Hello</button>
        </>
        );
}
export default useOnline;