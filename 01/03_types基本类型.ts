// 1. 也可以使用字面量进行类型声明。可以使用 | 或
let d: 10
d = 10
// d = 11 // 不能将类型“11”分配给类型“10”。

// 可以使用或来连接多个类型(联合类型)   或  ｜
let f: 'male' | 'female'
f = 'male'
f = 'female'

let g: boolean | string
g = true
g = '呵呵'


// 2. any 表示任意类型，一个变量设置类型为any后，相当于对该变量关闭了ts的类型检测
// 不建议使用any类型
let h: any
h = 1
h = '京津冀'

// 声明变量不指定类型，ts会自动判断变量的类型为any（隐式的 any）
let j
j = 1
j = '京津冀'

// 3. unknown 表示未知类型。是一个类型安全的any
let k: unknown
k = 1
k = '222'

let s: string
// h是any类型，它可以赋值给任意变量。该变量也会变成any类型
s = h

// k是unknown类型，它不能赋值给其他变量。
// s = k // 不能将类型“unknown”分配给类型“string”。
// 如果想要赋值，需要进行类型判断
if (typeof k === 'string') {
    s = k
}

// 4. 类型断言 as  可以告诉解析器变量的实际类型
// 语法：
    // 变量 as 类型
    // <类型>变量
s = k as string
s = <string>k


// 5. void 表示空值（undefined），以函数为例，就表示没有返回值的函数。如果给了返回值就会报错
function fn(): boolean { // 返回值是布尔类型
    return true
}
function fn1(num) { // 如果不设置返回值就是any
    if (num > 0) { // 会根据返回情况去判断类型。返回值是 true | 123
        return true 
    } else {
        return 123
    }
}
function fn2(): string | number { // 返回值字符串或者数字

}
function fn3(): void {
    // return 123 // 不能将类型“number”分配给类型“void”。
    return undefined
}

// 6. never 没有值，不能有任何值。
function fn4(): never {
    throw new Error('报错了')
}




