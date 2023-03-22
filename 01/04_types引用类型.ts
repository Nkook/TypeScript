// 1. object 对象声明
let a: object
a = {}
a = function() {}

let b: {} // b是个对象，大括号里可以指定属性
// 语法：
    // {属性名: 属性值, 属性名: 属性值}
// let c: {name: string} // c是个对象，对象里有个属性name类型是字符串
// c = { name: '哈哈哈' }

// 属性名后加 ? 表示该属性可有可无
let d: {name: string, age?: number} 
d = {name: 'HH', age: 18}

// 给对象增加任意属性
// [propName: string]: any  // 表示任意字符串的属性名，属性值任意类型
let f: {name: string, [propName: string]: any}
f = { name: 'jjj', age: 18, gender: '男'}


// 2. function 函数类型声明
// 语法
//     (形参: 类型, 形参: 类型,...) => 返回值
// g是一个函数，函数有两个参数a b 都是数字类型，返回值也是数字
let g: (a: number, b: number) => number
// g = function(n1: number, n2: string): number {
//     return n1+ n2 // 不能将类型“string”分配给类型“number”
// }
g = function(n1: number, n2: number): number {
    return n1+ n2
}


// 3. array 数组类型声明：
// 语法
//     类型[]
//     Array<类型>
// string[] 表示字符串数组
let h: string[]
h = ['1', '2']

// number[] 表示数值数组
let j: number[] // let j: Array<number>
j = [1, 2]

// 任意类型
let k: any[]
k = [1, 'a']


// 4. tuple元祖，元祖就是固定长度的数组
// 语法 
//      [类型, 类型, 类型]
let l: [string, string]
// l = ['11'] // 不能将类型“[string]”分配给类型“[string, string]”。源具有 1 个元素，但目标需要 2 个。


// 5. enum枚举 
let z: {name: string, gender: string}
z = {
    name: '哈哈',
    gender: '男'
}
console.log(z.gender === '男')

// 在固定的几个值选择的时候，可以定义为枚举。比如性别只有男女
enum Gender {
    Male = 0,
    Female = 1
}
let x: {name: string, gender: Gender}
x = {
    name: '哈哈',
    gender: Gender.Male
}
console.log(x.gender === Gender.Male)

// 6. & 表示同时且的意思。表示用来连接对象的两个属性
let c: {name: string} & {age: number}
c = {name: '来了', age: 18}

// 7. type 类型的别名: 简化类型的使用
// let m: 1 | 2 | 3
// let n: 1 | 2 | 3
type myType = 1 | 2 | 3
let m: myType
let n: myType
let p: myType



