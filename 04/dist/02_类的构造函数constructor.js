"use strict";
// constructor构造函数 用来初始化对实例对象的属性赋值操作
class Dog {
    // constructor 被称为构造函数。属性在构造函数中进行赋值
    // 构造函数会在对象创建时调用；当new实例对象的时候相当于调用了constructor
    constructor(name, age) {
        // this 在类中表示new的实例对象；在构造函数中当前对象就是新new的对象；
        // 可以通过this给当前新建的对象中添加属性
        // 2. 属性赋值写在这里
        this.name = name; // this指向当前创建的对象
        this.age = age;
    }
    sayHello() {
        console.log('大家好', this); // 这里的this，谁调用这个方法，this就是谁！
    }
}
let dog1 = new Dog('hh', 20);
let dog2 = new Dog('rr', 10);
dog1.sayHello(); // 此时方法中的this是dog1
