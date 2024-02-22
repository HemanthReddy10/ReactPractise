// useeffect allows you to perform sideeffects in your computer
//Some examples of side effects are: 
//fetching data, directly updating the DOM, and timers.
//Use setTimeout() to count 1 second after initial render:
import { useEffect,useState } from "react";
export default function Timer(){
    const [count,setCount]=useState(0);
     useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
       },[]);
    return <h1>I have rendered {count} times</h1>
    
}
