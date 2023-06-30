import logo from './logo.svg';
import './App.css';

function MyGiao() {
  return (
    <div className="MyGiao">
      <p>giao</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      这下面是另一个我自定义的组件giao
      <MyGiao />
    </div>
  );
}

export default App;
