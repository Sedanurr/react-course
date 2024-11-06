import logo from './logo.svg';
import './App.css';
import { useRef } from 'react'

function App() {
  const txtTitle = useRef();
  const colorCode = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = colorCode.current.value;
    alert(`${title},${color}`);
    txtTitle.current.value = "";
    colorCode.current.value = "";
  }
  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='color name ...' ref={txtTitle} />
      <input type="color" ref={colorCode} />
      <button>Add</button>
    </form>
  );
}

export default App;
