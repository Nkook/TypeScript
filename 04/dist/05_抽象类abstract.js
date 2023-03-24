"use strict";
// 抽象类只能用来继承
(function () {
    // 父类也可以被new创建实例对象
    // 不希望父类用来创建对象，只用来做继承
    // 以abstract 开头的类是抽象类
    //      抽象类只能用来被继承，不能用来创建对象
    // 抽象类中可以添加抽象方法
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪');
        }
    }
    // class Cat extends Animal { // 报错非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“sayHello”。
    // }
    let dog1 = new Dog('旺财');
    dog1.sayHello();
})();
