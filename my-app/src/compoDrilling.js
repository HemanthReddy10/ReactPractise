// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between 
//deeply nested components more easily than with useState alone.
// State should be held by the highest parent component in the stack that requires access to the state.

// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state as "props" through each nested component. 
//This is called "prop drilling".

import { useState } from "react";

export default function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>Hello {user}!</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}



