import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [emotion, setEmotion] = useState("happy") // useState bir array ve içinde iki değişken var birincisi app render olduğunda alacağı value, ikincisi ise fonksiyon bu fonksiyonu tanımladığımız state valuesunu güncellemek için kullanıyoruz.

  useEffect(() => {
    console.log(`It's ${emotion} right now.`)
  }, [emotion]) //useEffect'i seçtiğimiz bir state'i izlemek için kullanıyoruz. İki değişken alıyor birincisi fonksiyon ikincisi ise array. Eğer [] verirsek ikinci parametreyi değişken yalnızca ilk render olduğunda izlenir. Bir value verirsek ilgili değişken her değiştiğinde çalışır.
  return (
    <div className="App">

      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
    </div>
  );
}

export default App;
