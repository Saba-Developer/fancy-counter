import { useState } from "react";
import Countbutton from "./components/Countbutton";
import Button from "./components/Reset";
import Title from "./components/Title";
import Count from "./components/Count";

export default function App(){
  const [count, setCount]=useState(0)
  return(
    <>
    <main>
      <div className="card">
      <Title/>
      <Count count={count}/>
      <Button  setCount={setCount}/>

      <Countbutton count={count} setCount={setCount}/>

      </div>
    </main>
    </>
  )
}