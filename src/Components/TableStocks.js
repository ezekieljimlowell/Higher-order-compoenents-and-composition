import React from "react";

export const TableStocks = (props) => {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.stockName}</td>
            </tr>
        </>
    )
}