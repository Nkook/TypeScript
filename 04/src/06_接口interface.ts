// interface接口定义类的结构，通过implements让类去实现一个接口。
// 主要用来标准规范类的结构，严格按照interface接口中进行定义

// ts编译后是看不到interface的，只能看到一个类。是ts独有的，写的时候有，编译完就没有了。abstract也是ts独有的。泛型也是独有的。

(function() {

    // type描述一个类型
    type myType = {
        name: string,
        age: number
    }
    const obj: myType = {
        name: '章三',
        age: 11
    }

    // interface接口 用来定义一个类的结构。类是class开头，接口是interface开头
    //  用来定义一个类中应该包含哪些属性和方法

    // 同时接口也可以当成类型声明去使用。同上面的type。
    // 不同的是：type不可以重复声明；interface可以重复声明
    interface myInterface {
        name: string,
        age: number
    }
    interface myInterface {
        gender: string
    }
    // 
    const obj1: myInterface = {
        name: '里斯',
        age: 23,
        gender: '男'
    }

    /*
        接口可以在定义类的时候去限制类的结构
        接口中的所有的属性都不能有实际的值
        接口只定义对象的结构，而不考虑实际值（这里和05 抽象类有点像）
            在抽象类中可以有抽象方法，也可以有普通方法；在接口中只能有抽象方法
            在抽象类中用extends继承；在接口中用implements实现
        在接口中所有的方法都是抽象方法
    
    */
   interface myInter {
        name: string
        sayHello():void
   }
   /*
        定义类时，可以使类去实现一个接口。通过implements
        实现接口就是使类满足接口的要求：比如上面的接口中有一个属性一个方法，那么类中也要有

        什么叫接口：
            比如usb接口，有了接口，才能使用连接一些硬盘
            接口就是定义一个规范，只要实现了接口，就是满足规范，就可以在指定场景中使用
            接口对类是一个限制。只要实现了这个接口，就满足了要求。
            接口就是限制某个类必须去符合这个接口的标准！！
   */
  class MyClass implements myInter {
      name: string
      constructor(name: string) {
        this.name = name
      }
      sayHello() {
        console.log('我是类还是接口？？？')
      }
        
  }
    

})()