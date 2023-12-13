import React, { useState } from 'react';

const NumberPlusMinus = () => {

    const[count, setCount] = useState(0);

    const minus = () => {
        setCount(count - 1);
    }

    const plus = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={minus} className='minus'>-</button>
            <>{count}</>
            <button onClick={plus} className='plus'>+</button>
        </div>
    );
};

export default NumberPlusMinus;