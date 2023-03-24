// super 用来引用父类

(function(){
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHello() {
            console.log('hhhh')
        }
    }
    class Dog extends Animal {
        // 如果想在子类中增加一个属性，new实例对象的时候会对属性进行初始化，需要调用constructor构造函数。此时子类的构造函数就会把父类的覆盖掉
        // 如果子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用。
        age: number
        constructor(name:string, age:number) {
            super(name) // 调用父类的构造函数，并把需要继承的name属性进行传参
            this.age = age
        }

        sayHello() {
            // 在类的方法中，super表示当前类的父类
            // 在当前子类中想引用父类时或者父类的实例时，就可以用super去
            // super.sayHello()
            console.log('汪汪')
        }
    }

    let dog1 = new Dog('hh', 28)
    dog1.sayHello()
})()