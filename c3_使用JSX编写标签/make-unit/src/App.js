import logo from './logo.svg';
import './App.css';

function MyGiao() {
  return (
    //指定className属性指定样式
    <div className="MyGiao">
      <p>giao</p>
    </div>
  );
}
//定义一个使用空标签进行包裹的JSX组件
function MyGiao2() {
  return (
    <>
      <p>giao2</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      这下面是另一个我自定义的组件giao
      <MyGiao />
      <MyGiao2 />
    </div>
  );
}

export default App;
