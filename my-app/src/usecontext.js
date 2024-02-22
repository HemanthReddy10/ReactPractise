import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Componentuc() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext); 

  return (
    <>
      <h1>Component 5</h1>
      <h2>Hello {user} again</h2>
    </>
  );
}

// Yes, that's correct! The useContext hook in React is used for accessing the current value of a context. 
//When you provide a value to a context at 
//the top of your component tree, all components within that subtree can access that value using useContext. 
//This provides a way to share state or data across components without having to pass props through 
//every intermediate component, which is commonly known as "prop drilling."