import React from "react";
import { TableUser } from "./TableUser";

export const Users = (props) => {
    console.log(props)
    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((user => <TableUser key={user.id} id={user.id} user={user.userName} />))}
                    </tbody>
                </table>
            </div>
        </>
    )
}