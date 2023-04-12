import React, { useState } from "react";

var arr = [2, 34, 2, 1, 3, 55, 33, 4554, 335, 43, 2];

const Hooks = () => {
    const [name, setName] = useState("Rahul");
    const [roll, setRoll] = useState(101);
    // const name = nameStateVariable[0];
    const newName = "Geeks"
    const randomNumber = () => {
        let x = Math.round( Math.random()*100);
        return x;
    }

    const handleClick = () => {
        // nameStateVariable[1](`${newName}`)
        setName(`${newName}`);
        const newRoll = randomNumber();

        // arr.push(newRoll)
        printRoll(arr);

        setRoll(`${newRoll}`);
    }

    const printRoll = (arr) => {
        console.log(arr);
        
    }

    return (
        <>
            <h1>Hooks Page...</h1>
            <h1>Name : {name}</h1>
            <h2>Roll : {roll}</h2>
            <h3 id="roll_array">Roll Array : </h3>
            <button type="button" onClick={handleClick} >Change</button>
        </>
    )
}

export default Hooks;