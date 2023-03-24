"use strict";
// super 用来引用父类
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hhhh');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name); // 调用父类的构造函数，并把需要继承的name属性进行传参
            this.age = age;
        }
        sayHello() {
            // 在类的方法中，super表示当前类的父类
            // 在当前子类中想引用父类时或者父类的实例时，就可以用super去
            // super.sayHello()
            console.log('汪汪');
        }
    }
    let dog1 = new Dog('hh', 28);
    dog1.sayHello();
})();
