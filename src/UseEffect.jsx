import React, { useState, useEffect } from 'react';

function UseEffect(){
    const [width, setWidth] = useState(window.innerWidth);
    const [heigth, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event");
        }
    },[]);

    useEffect(() => {
        document.title =`Size: ${width} x ${heigth}`;
    },[width,heigth])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Heigth: {heigth}px</p>
        </div>
    );
}

export default UseEffect