import './App.css';
import FavouriteColor from  './hooks.js';
import Cars from './cars.js';
import { useState } from 'react';
import Timer from './useeffect.js';
import Counter from './useeffect2.js';
import Component1 from './compoDrilling';
import Componentuc from './usecontext';
// -------------------------------------------------------------------
// Data storage 
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
const products=[
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];


// -------------------------------------------------------------------
// Compononent creation 
function AbovePage(){
  return(
<>
<h1>I am a fail case</h1>
<p>Hello there.<br />How do you do?</p>
<img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
</>
  );
}
function MyButton() {
  return (
    <button>
      I'm a pass button
    </button>
    
  );
}

 function CountButton(){
 const [count,setCount]=useState(0);
 function incClicking(){
  setCount(count+1);
 }
 function decClicking(){
  if(count>0){
    setCount(count-1);
  }
  
 }

 return (
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <button style={{ marginRight: '10px' }} onClick={decClicking}>-</button>
  <h1 style={{ margin: '0 10px' }}>Count = {count}</h1>
  <button style={{ marginLeft: '10px' }} onClick={incClicking}>+</button>
</div>

 );

 }
// -------------------------------------------------------------------
// Compononent Rendering which makes it single page application
export default function MyApp(props) {
const listItems=products.map(product=>
    <li key={product.id}>
      {product.title}</li>
  );
  function handleClick(){
    alert("you clicked me");
  }

  
  return (
    <div>
      <h1>Welcome to my  practise  app</h1>
      {props.isLoggedIn?(<MyButton />):(<AbovePage/>)}
      <ul>{listItems}</ul>
      {/* <MyButton />
      <AbovePage/> */}
      <button onClick={handleClick}>
        Clickhere buddy!!!!!
      </button>
      <CountButton />
      <CountButton />
      <FavouriteColor/>
      <Cars/>
      <Timer/>
      <Counter/>
      <Component1/>
      <Componentuc/>
    </div>
  );
}
