---
title: "JavaScript-内置对象-Reflect"
description: "JavaScript-内置对象-Reflect"
pubDate: "2023-8-24　22:31:24"
heroImage: "http://img.blog.loli.wang/2023-8-27-Reflect/01.png"
tags:
    - JavaScript内置对象
    - Reflect
    - 学习折腾
---

## Reflect
Reflect 是一个**内置的对象**，他提供了一些方法来 **操作对象** 的属性和方法， 并且它还提供 **拦截 JavaScript 操作** 的方法。这些方法与 proxy handler (en-US) 的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。


#### Reflect.get(target, propertyKey[, receiver]) 获取对象的属性值

``` bash

    const obj = {name:'Mowang',age:20}

    console.log(Reflect.get(obj,'name')) // 输出 Mowang

```

#### Reflect.set(target, propertyKey, value[, receiver]) 设置对象的属性值

``` bash
    const obj = {name:'Mowang',age:20}
    
    Reflect.set(obj,'age',22)

    console.log(obj['age']) // 输出 22
```

#### Reflect.has(target, propertyKey) 判断对象是否具有指定的属性

``` bash
    const obj = {name:'Mowang',age:20}
    
    const hasName = Reflect.has(obj,'name')

    console.log(hasName) // 输出 true

```

#### Reflect.deleteProperty(target, propertyKey) 删除对象的属性

``` bash
    const obj = {name:'Mowang',age:20}
    
    Reflect.deleteProperty(obj,'age')

    console.log(obj) // 输出 { name:'Mowang' }

```

#### Reflect.construct(target, argumentsList[, newTarget]) 使用给定的参数列表创建一个对象实例

``` bash 
    class Person {
        constructor(name,age){
            this.name = name;
            this.age = age
        }
    }

    const args = ['Mowang',20];
    const person = Reflect.construct(Person,args)
    
    console.log(person) // 输出 {name:'Mowang',age:20}

```


这只是他的常用方法，他还有一些其他的函数
``` bash
    - Reflect.apply(target, thisArgument, argumentsList)  # 通过指定的参数列表发起对目标 (target) 函数的调用
    - Reflect.get(target, propertyKey[, receiver]) # 从已有的对象种读取去属性值
    - Reflect.has(target, propertyKey) # 判断目标对象中是否存在这个属性
    - Reflect.set(target, propertyKey, value[, receiver]) # 修改或者设置一个属性
    - Reflect.isExtensible(target) # 判断这个对象是否可拓展 如果可以拓展我们就可以增加新属性 ，比如 Reflect || Object.preventExtensions(target) 设置过的属性就是不可拓展的
    - Reflect.ownKeys(target) # 返回一个以目标属性键值的数组 比如 const obj = {name:'Mowang', age:20 }  Reflect.ownKeys(obj) 返回结果为 ['name','age']
    ...
    // 举几个常用的 , 剩下的阅读MDN https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
```

Reflect 是一个内置的 JS 对象，它提供了一系列方法，可以让开发者通过调用这些方法，访问一些 JS 底层功能。也就是说，**从 Reflect 对象上可以拿到语言内部的方法**


#### 配合 proxy 使用

``` bash
let p = {
    a: 'a'
};

let handler = {
  set(target, key, value, receiver) {
    console.log('set');
    Reflect.set(target, key, value, receiver)
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty');
    Reflect.defineProperty(target, key, attribute);
  }
};

let obj = new Proxy(p, handler);
obj.a = 'A';
// set
// defineProperty

```

如果 Proxy 对象和 Reflect 对象联合使用，前者**拦截赋值**操作，后者完成**赋值的默认行为**，而且传入了 **receiver**，那么 **Reflect.set 会触发 Proxy.defineProperty 拦截**。


参考文档  [MDN - Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
