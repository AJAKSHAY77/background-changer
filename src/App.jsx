
import { useState } from "react"
import "./index.css"

function App() {
  const[color ,setcolor]=useState("olive")
  

  return (
    <>
      <div className="h-screen w-full" style={{ backgroundColor: color }}>
        <button className="bg-black text-white" onClick={()=>setcolor("black")}>black</button>
        <button className="bg-red-500 text-white" onClick={()=>setcolor("red")}>red</button>
        <button className="bg-green-400 text-white" onClick={()=>setcolor("green")}>green</button>
        
       
     </div>
    </>
  )
}

export default App
