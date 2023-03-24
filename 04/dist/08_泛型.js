"use strict";
// 在不确定的类型 之前可以使用any
// 在定义函数或类的时候，类型不明确的时候 用【泛型】也就是个变量来表示。根据具体调用去确定类型
// function fn(a: any):any {
//     return a
// }
// 1. T表示任意类型
// 在fn后面定义了T，括号里的参数及返回值类型才能用T；参数和返回值类型一样
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数。也就是fn
fn(10); // 不指定泛型，ts可以自动对类型进行推断。此时T就是number类型
fn('哈哈哈'); // 指定泛型
// 2. 泛型可以同时指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(1, '经济');
fn2(2, '积极');
// 这个泛型T 是 interface的实现类（子类）
function fn3(a) {
    return a.length;
}
// fn3(11)  // 数字里没有length， 类型为“number”的参数不可分配给类型为“Inter”的参数。
fn3('11'); // 字符串123里有length属性
// fn3({name: '呵呵'}) // 也不行
fn3({ length: 10 });
// 4. 类里也可以指定泛型
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
let mc = new MyClass('快看看');
let mc2 = new MyClass('快看看');
