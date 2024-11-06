import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ]
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value},${colorProps.value}`);
    resetTitle("")
    resetColor("#000000")
  }
  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='color name ...' {...titleProps} />
      <input type="color" {...colorProps} />
      <button>Add</button>
    </form>
  );
}

export default App;
