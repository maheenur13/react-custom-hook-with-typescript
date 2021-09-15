import { useEffect, useState } from "react";

function getSavedValue(key: any, initialValue: any) {
    const savedValue = JSON.parse(localStorage.getItem(key)|| '{}')
    if (savedValue) return savedValue;

    return initialValue;
}

export default function useLocalStorage(key: any, initialValue: any) {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return [value, setValue]
}