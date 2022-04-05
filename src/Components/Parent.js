import React from "react";
import { HigherOrder } from "./HigherOrder";
import { StockList } from "./StockList";
import { Users } from "./Users";

export const Parent = () => {

    const stocks = [
        { id: 1, stockName: "Capgemini" },
        { id: 2, stockName: "Infosys" },
        { id: 3, stockName: "Dell" },
        { id: 4, stockName: "Intel" },
        { id: 5, stockName: "Star" }
    ]

    const userList = [
        { id: 1, userName: "Ravi" },
        { id: 2, userName: "Riswan" },
        { id: 3, userName: "Parthiban" },
        { id: 4, userName: "Mani" },
        { id: 5, userName: "Ben Samuel" }
    ]

    const StockDisplay = HigherOrder(
        StockList,
        stocks
    )

    const UserDisplay = HigherOrder(
        Users,
        userList
    )

    return (
        <>
            <StockDisplay />
            <UserDisplay />
        </>
    )
}