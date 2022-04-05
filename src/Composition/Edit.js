import React, { useState } from "react";
import useToggle from "./CustomHook";

export const Edit = () => {
    const { display: display, toggleStatus: toggleStatus } = useToggle();
    const [input, setInput] = useState("Edit Component");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <h2>Composition</h2>
            <div>{display ? <input type="text" value={input} onChange={handleChange}></input> : <div>Title: {input}</div>}</div>
            <button type="button" onClick={toggleStatus}>{display ? "Cancel" : "Edit"}</button> 
        </>
    )
}