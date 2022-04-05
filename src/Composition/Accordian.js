import React from "react";
import useToggle from "./CustomHook";

export const Accordian = () => {
    const { display: display, toggleStatus: toggleStatus} = useToggle();

    return (
        <>
            <h2>Accordian</h2>
            <button type="button" onClick={toggleStatus}>{display ? "Hide" : "show"}</button>
            <div>{display && "Accordian"}</div>
        </>
    )


}