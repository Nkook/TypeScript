"use strict";
(function () {
    // 定义一个人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *      - 它们被称为属性的存取器
         *
         */
        // 定义方法，用来获取name属性
        getName() {
            return this._name;
        }
        // 定义方法，用来设置name属性
        setName(value) {
            this._name = value;
        }
        setAge(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    let per = new Person('孙武', 11);
    console.log('22', per); //  {_name: '孙武', _age: 11}
    per.getName();
    per.setName('张三');
    per.setAge(-22);
    console.log(per); // {_name: '张三', _age: 11}
    /*
        现在属性是在对象中设置的，属性可以任意的被修改
        属性可以被任意修改，将会导致对象中的数据变得非常不安全
        ts可以在属性前添加属性的修饰符，来满足不同的需求
    
    */
    //    per.name = '哈哈哈'
    //    per.age = -39
    //    console.log(per)
    // 3. protected
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num 属性“num”受保护，只能在类“A”及其子类中访问。
    // 4. 语法：直接将属性定义在构造函数中。属性的声明和赋值就都不用写了！！
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('kk', 8);
    console.log('c', c); //  {name: 'kk', age: 8}
})();
