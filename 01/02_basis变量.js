// 1. 声明变量可以指定类型（小写）。ts编译成js可以编译成任意版本。
// 声明变量a 类型是number，以后使用过程中a的值只能是数字
var a;
a = 10;
// a = '111' // 报错 不能将类型“string”分配给类型“number”。 // 即使报错也会编译成js
var b;
b = '11';
// 2. 声明完变量直接进行赋值
// let c: boolean = true
// 3. 如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
var c = true;
// 4. js的函数中的参数不考虑类型和个数
//    ts参数可以设置类型，返回值也可以设置
// function sum(a, b) {
//     return a+b
// }
// console.log(sum(12, 22)) // 34
// console.log(sum(12, '22')) // 1222
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 22)); // 34
console.log(sum(12, '22')); // 1222
