import React, { useCallback, useMemo, useState } from "react";

const useToggle = () => {
    const [display, setDisplay] = useState(false);

    const toggleStatus = useCallback(() => {
        setDisplay(prevState => !prevState)
    }, [display]);

    const values = useMemo(() => ({
        display,
        toggleStatus
    }), [display, toggleStatus]);

    return values;
}

export default useToggle;