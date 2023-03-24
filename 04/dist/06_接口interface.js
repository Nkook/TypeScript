"use strict";
// interface接口定义类的结构，通过implements让类去实现一个接口。
// 主要用来标准规范类的结构，严格按照interface接口中进行定义
// ts编译后是看不到interface的，只能看到一个类。是ts独有的，写的时候有，编译完就没有了。abstract也是ts独有的。泛型也是独有的。
(function () {
    const obj = {
        name: '章三',
        age: 11
    };
    // 
    const obj1 = {
        name: '里斯',
        age: 23,
        gender: '男'
    };
    /*
         定义类时，可以使类去实现一个接口。通过implements
         实现接口就是使类满足接口的要求：比如上面的接口中有一个属性一个方法，那么类中也要有
 
         什么叫接口：
             比如usb接口，有了接口，才能使用连接一些硬盘
             接口就是定义一个规范，只要实现了接口，就是满足规范，就可以在指定场景中使用
             接口对类是一个限制。只要实现了这个接口，就满足了要求。
             接口就是限制某个类必须去符合这个接口的标准！！
    */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('我是类还是接口？？？');
        }
    }
})();
