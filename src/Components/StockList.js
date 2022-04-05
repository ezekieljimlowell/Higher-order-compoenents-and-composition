import React from "react";
import { TableStocks } from "./TableStocks";

export const StockList = (props) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Stock name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((stock) => <TableStocks key={stock.id} id={stock.id} stockName={stock.stockName}/>)}
                </tbody>
            </table>

        </>
    )
}