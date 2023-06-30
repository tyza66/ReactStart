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

//定义一些常量
const giao3 = "giao3";

function MyButton(){
  //这里面要实现的响应事件其实就是定义一个function
  //之后这个function给绑定到一个控件的onClick方法上
  function giao(){
    alert("giao");
  }
  return(
    <div>
      <button onClick={giao}>点我出giao</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      这下面是另一个我自定义的组件giao
      <MyGiao />
      <MyGiao2 />
      <br/>
      {giao3}
      <MyButton />
    </div>
  );
}

export default App;
