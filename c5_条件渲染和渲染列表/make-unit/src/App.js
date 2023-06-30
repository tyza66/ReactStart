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

function Myif() {
  return (
    <div>
      {
        //这里的if语句是JSX语法的if语句
        1 == 1 ?
          <p>1=1</p>
          :
          <p>1!=1</p>
      }
    </div>
  );
}

//定义一些常量
const giao3 = "giao3";

function Yourif() {
  //这个样子略显别扭 但是确实是能用的(执行了定义的判断逻辑)
  let content;
  if (false) {
    content = "1";
  } else {
    content = "2";
  }
  return (
    <div>
      {content}
    </div>
  );
}

//这样的写法是没有另一种条件的写法
function Myif2() {
  return (<>
    true&&<p>lalala</p>
  </>)
}

//定义一个对象数组
const arr = [
  { id: 1, name: "giao1" },
  { id: 2, name: "giao2" },
  { id: 3, name: "giao3" }
]

function MyList() {
  //使用map方法 生成一个新的数组 转换为标签列表
  const listItems = arr.map(one =>
    <li key={one.id}>
      {one.name}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function App() {
  return (
    <div className="App">
      这下面是另一个我自定义的组件giao
      <MyGiao />
      <MyGiao2 />
      <br />
      {giao3}
      <Myif />
      <Yourif />
      <Myif2 />
      <MyList />
    </div>
  );
}

export default App;
