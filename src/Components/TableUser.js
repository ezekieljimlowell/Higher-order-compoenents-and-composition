import React from "react";

export const TableUser = ({ user, id }) => {
    return (
        <>

            <tr>
                <td>{id}</td>
                <td>{user}</td>
            </tr>


        </>
    )
}