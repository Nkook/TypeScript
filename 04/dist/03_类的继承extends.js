"use strict";
// extends实现子类继承父类
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    // 子类Dog继承父类Animal
    // 子类可以拥有父类中所有的属性和方法
    // 子类也可以增加自己的属性和方法
    // 方法重写：如果在子类中添加了和父类相同的方法，会覆盖父类中的方法
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑～～～`);
        }
        sayHello() {
            console.log('汪汪！');
        }
    }
    class Cat extends Animal {
    }
    let dog1 = new Dog('hh', 20);
    let cat1 = new Cat('咪咪', 29);
    dog1.sayHello();
    dog1.run();
    cat1.sayHello();
})();
