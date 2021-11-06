import React, {useEffect} from 'react'
import ReactDOM from 'react-dom';


export default function Fluid() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = '/script.js'
        script.type = 'application/javascript'
        script.async = true;
        document.body.appendChild(script);
    }, [])
    return (
        <canvas className="w-full h-full" />
    )
}
