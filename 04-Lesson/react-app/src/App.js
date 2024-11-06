import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [emotion, setEmotion] = useState("happy") // useState bir array ve içinde iki değişken var birincisi app render olduğunda alacağı value, ikincisi ise fonksiyon bu fonksiyonu tanımladığımız state valuesunu güncellemek için kullanıyoruz.
  return (
    <div className="App">

      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
    </div>
  );
}

export default App;
