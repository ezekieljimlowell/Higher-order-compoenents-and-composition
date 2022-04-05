import React, { useState } from "react";

export const HigherOrder = (InnerComponent, data) => {
    const [hocData] = useState(data);
    
    return function() {

        return (
            <>
                <InnerComponent data={hocData}/>
            </>
        )
    }
}