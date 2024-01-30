import React, { useEffect, useReducer, useState } from "react";
import './style.css';

const UseReducer = () => {

    const reducer = (state, action) => {
        if(action.type=== 'Incr') {
            state = state + 1;
        }
        if(state > 0 && action.type=== 'Decr') {
            state = state - 1;
        }
        return state;
    }

    const initialData = 0;
    const [state, dispatch] = useReducer(reducer, initialData);

    useEffect(()=> {
        document.title = `Chats(${state})`;
    })
    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => dispatch({type:'Incr'})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={() => dispatch({type:'Decr'})}>
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
export default UseReducer;