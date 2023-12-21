import { useState } from "react";

export default function Tasks() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p id="counter">{counter}</p>
      <button onClick={clickHandler}>Increment</button>
    </div>
  );
}

// import React, {useState} from 'react';

// import './styles.css';

// // don't change the Component name "App"
// export default function App() {
//     const [count, setCount]=useState(0)

//     const HandleIncrement = ()=>{
//         setCount(count + 1)
//     }

//     return (
//       <div>
//         <p id="counter">{count}</p>
//         <button onClick={HandleIncrement}>Increment</button>
//       </div>
//     );
// }
