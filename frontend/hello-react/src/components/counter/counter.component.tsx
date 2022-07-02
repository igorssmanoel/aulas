import { useState } from "react";
import "./counter.style.css"

const Counter = () => {
    const [count, setCount] = useState(0);
    return <div className={"countContainer"}>
        <button className={"button increment"} onClick={() => setCount(count + 1)}>
            +
        </button>
        <div className={"count"}>
            {count}
        </div>
        <button className={"button decrement"} onClick={() => setCount(count - 1)}>
            -
        </button>


    </div>
}

export default Counter;