import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const allowDrop = (ev) => {
    ev.preventDefault();
  }

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


  return (
    <>
     <div>
     <div id="div1" onDrop={drop} onDragOver={allowDrop}>
        {/* This div is the drop target */}
      </div>

      <br />

      <img
        id="drag1"
        src="https://picsum.photos/200/300"
        draggable="true"
        onDragStart={drag}
        width="336"
        height="69"
        alt="W3Schools logo"
      />
     </div>
    </>
  )
}

export default App
