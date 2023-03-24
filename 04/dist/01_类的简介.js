"use strict";
// 使用class关键字来定义一个类
class Person {
    constructor() {
        // 直接定义的属性是实例属性；需要创建实例才能访问
        this.name = '孙悟空';
        // static修饰的属性可以直接通过类访问；在属性前使用static关键字可以定义类属性（静态属性）
        // readonly修饰的属性是只读，无法修改
        // static readonly age: number = 18
        this.age = 18;
    }
    // 定义方法需要通过new的实例调用；如果static修饰，则通过类调用
    static sayHello() {
        console.log('大家好');
    }
}
const per = new Person();
console.log(per.name);
// console.log(Person.age)
// per.sayHello()
Person.sayHello();
