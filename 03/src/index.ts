import { m } from './m1'
function sum(a: number, b: number): number {
    return a + b
}

console.log(sum(12, 2))
console.log('m', m)

const obj = {name: '啦啦啦'}
console.log(obj)

console.log(Promise) // 会去执行corejs里实现的方法去兼容低版本的浏览器

let fn = (a: number, b: number) => a + b // 箭头函数会被babel转成普通函数
fn(1, 2)