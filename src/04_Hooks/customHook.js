import React, { useState } from "react";
import { Fragment } from "react";

const useCustomCounter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return {
        count,
        handleIncrement,
    }
};

export default useCustomCounter;
