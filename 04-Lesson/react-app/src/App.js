import logo from './logo.svg';
import './App.css';

const [firstCity, second] = ["tokyo", "istanbul", "berlin"]
console.log(firstCity)
console.log(second)

function App({ library }) {
  return (
    <div className="App">

      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
