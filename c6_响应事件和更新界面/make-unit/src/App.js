import './App.css';
import { useState } from 'react';

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

//这个按钮用来演示更新界面的功能
//这样定义的组件里面的变量的值都是独立的 不会影响到别的组件
//因为每个组件都拥有自己的state
function MyButton2(){
  //一次显示按钮时，count 的值为 0，因为你把 0 传给了 useState()。当你想改变 state 时，调用 setCount() 并将新的值传递给它。点击该按钮计数器将递增
  const [count,setCount] = useState(0);

  function add(){
    setCount(count+1);
  }
  return(
    <button onClick={add}>
      点我的话{count}会变
    </button>
  );
}

//这个将是用来演示同时更新效果用的Button
function MyButton3({ count, onClick }){
  return (
    <button onClick={onClick}>点我改变一起的按钮{count}</button>
  );
}

function App() {

  const [count,setCount] = useState(0);

  function add(){
    setCount(count+1);
  }

  return (
    <div className="App">
      这下面是另一个我自定义的组件giao
      <MyGiao />
      <MyGiao2 />
      <br/>
      {giao3}
      <MyButton />
      <MyButton2 />
      <MyButton2 />
      <MyButton3 count={count} onClick={add}/>
      <MyButton3 count={count} onClick={add}/>
      <br/>

    </div>
  );
}

export default App;
