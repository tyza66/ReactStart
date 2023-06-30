import {React,useState} from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, DatePicker, message } from 'antd';//按官网的方式npm install antd --save 安装完antd之后就可以直接引用它提供的组件了
import './App.css';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';

dayjs.locale('zh-cn');


function App() {
  const [date, setDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();//messageApi是来自库中message.useMessage()返回值 所以有后面的info方法

  const handleChange = (value) => {
    messageApi.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };

  return (
    //配置提供者 这个标签制定了国际化语言为中文
    <ConfigProvider locale={zhCN}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
        </div>
      </div>
      {contextHolder/*这个玩意其实是弹出来那个吧*/}
    </ConfigProvider>
  );
}

export default App;
