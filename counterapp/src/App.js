import logo from './logo.svg';
import './App.css';
import React from "react"
import useDebounce from './allHooks';

function App() {
  const[counter,setcounter]=React.useState(0);
  const debouncedFunc=useDebounce(()=>{console.log("farman printed")})
    return (
        <div id='parent'>
            <h1>{counter}</h1>
            <div>
                <button onClick={debouncedFunc}>Increment</button>
                <button onClick={debouncedFunc}>Decrement</button>
            </div>
        </div>
  );
}

export default App;
