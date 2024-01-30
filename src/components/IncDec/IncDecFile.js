import React, { useEffect, useState } from "react";
import './style.css';

const IncDecFile = () => {
    const [num, setNum] = useState(10);

    const Increment = () => {
        setNum(num + 1);
    }
    const Decrement = () => {
        if(num > 0){
            setNum(num - 1);
        }
    }

    useEffect(()=> {
        document.title = `Chats(${num})`;
    })
    return (
        <>
            <div className="center_div">
                <p>{num}</p>
                <div class="button2" onClick={()=> Increment()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div class="button2" onClick={()=> Decrement()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}
export default IncDecFile;