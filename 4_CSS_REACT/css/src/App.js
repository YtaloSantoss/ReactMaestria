import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const redTitle = true

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <h2>Teste Css Component</h2>
      <hr />
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      <hr />
      {/*CSS Modules */}
      <Title />
      <h1 >Meu título</h1>
    </div>
  );
}

export default App;
