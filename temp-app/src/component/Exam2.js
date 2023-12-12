import React, { useState } from 'react';

const Exam2 = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default Exam2;