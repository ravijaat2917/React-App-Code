import { useEffect } from "react";
import { useState } from "react";

const useEffectFunction = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(50);

    const handleClick = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
      setCount1(count1 - 1);
    };

    useEffect(() => {
        console.log("useEffect is set called only at changement in count only");
    }, [count]);

    return (
      <>
        <h1>Count Up : {count}</h1>
            <button onClick={handleClick}>Change</button>

        <h1>Count Down : {count1}</h1>
        <button onClick={decrementCount}>Change</button>
      </>
    );
}

export default useEffectFunction;