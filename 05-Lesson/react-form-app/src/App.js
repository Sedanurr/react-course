import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState();
  const [color, setColor] = useState();

  const submit = (e) => {
    e.preventDefault();
    alert(`${title},${color}`);
    setTitle("")
    setColor("#000000")
  }
  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='color name ...' value={title} onChange={(event) => setTitle(event.target.value)} />
      <input type="color" value={color} onChange={(event) => setColor(event.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default App;
