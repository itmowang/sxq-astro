---
title: "React之路 - 第一篇"
description: "React之路 - 知识累计篇"
pubDate: "Jul 02 2023"
heroImage: "http://img.blog.loli.wang/2023-8-24-ReactExperience/01.png"
tags:
    - React
    - 学习折腾
    - React之路 - 第一篇
---

### 常用的 React 库

    - react   // 不必多说
    - react-dom  // React的官方渲染库，用于将React组件渲染到浏览器中
    - react-router-dom // React 官方路由库
    - react-redux // React 官方状态管理库
    - react-query // 用于管理和处理数据的React库
    - @tanstack/react-query 是 react-query 的一个扩展库，由 TanStack 维护 有一些react-query 没有的功能
    - redux-persist 用于持久化存储Redux状态的库，会将Redux的状态缓存到loaclStorage sessionStorage中 能够使页面刷新保留状态

### 函数式组件写法

```bash
// 参数1父组件传递进来的参数接收
// 参数2用于访问组件实例的方法和属性，或者直接操作 DOM 元素 React.forwardRef(MyComponent)

const 组件名(props,ref){
    const {name} = props;
    return <div> {name} </div>
}

export default 组件名
```

### 类组件写法

```bash
import React from 'react'

class 组件名 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
    
    // 组件生命周期方法
    componentDidMount() {
        // 组件挂载后执行的操作
    }

    render(){
        return (
            <div> {this.state.count} </div>
        )
    }
}

```

### 常用的Hook

##### 1. useState
用来存储状态变量变量 [something, setSomething] 用解构方式取值
something 为状态变量，setSomething 为改变状态变量的方法

```bash 
# 示例
import React, { useState } from "react";

const [something, setSomething] = useState(0); 
const [something1, setSomething1] = useState({
    test:222
});
const [something2, setSomething2] = useState("222");

# 修改状态变量something的方法
setSomething(1);

# 修改状态变量something1的方法
setSomething1({
    something1， // 这里的something1 为上面的状态变量   
    test:333
});

# 修改状态变量something2的方法
setSomething2("333");

```

##### 2. useEffect

用来处理副作用，比如异步请求，定时器等

```bash
# 示例
import React, { useState, useEffect } from "react";

const [something, setSomething] = useState(0);

useEffect(() => {
    // ....用来处理需要的副作用的处理
}, [something]); // something 为依赖项，当something发生变化时，useEffect会重新执行

#如果依赖项为空数组，他只会执行一次，相当于componentDidMount
useEffect(() => {
    // ....用来处理需要的副作用的处理
}, []);

```

##### 3. useContext

用来处理跨组件传值，类似于vue中的provide/inject ,方便数据各种组件之间的传递，也可以叫做上下文传递

```bash
# 示例
import React, { useState, useContext } from "react";

const [something, setSomething] = useState(0);

const Context = React.createContext(null);

# 组件声明

<Context.Provider value={context}>
    <组件名 />
</Context.Provider>

# 组件接收

const context = useContext(Context);

```


##### 4. useRef

用来获取DOM元素或者保存变量

```bash

# 示例
import React, { useState, useRef } from "react";

const [something, setSomething] = useState(0);

const ref = useRef(null);

# 获取DOM元素
<div ref={ref}></div>

# 获取变量
ref.current

```

##### 5. useReducer
useReducer 是 useState 的替代方案,用来进行性能优化，用于处理复杂的状态逻辑,他不会改变原有的状态，而是返回一个新的状态。

``` bash
# 示例

import React, { useReducer } from "react";

// 初始化状态
const initState = { name: '123' }

// reducer 函数
const reducer = (state: any, action: any) => {
    return action.type === 'add' ? { name: '456' } : { name: '789' }
}

// useReducer 接收两个参数，第一个参数为reducer函数，第二个参数为初始化状态
const [state, dispatch] = useReducer(reducer, initState);

# 修改状态
dispatch({ type: 'add' })

```
![切图2](http://img.blog.loli.wang/2023-8-24-ReactExperience/02.png)


下一次写脚手架的时候再去填充。。。。



参考文档 [阮一峰博客](https://www.ruanyifeng.com/blog/2019/09/react-hooks.html)


