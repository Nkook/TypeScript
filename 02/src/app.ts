console.log('哈哈哈')

// noImplicitAny设置为true会进行报错提醒
function fn(a, b) {
    return a + b
}

// 不确定this是谁时，希望可以检查出来。noImplicitThis设置为true
function fn2() {
    alert(this)
}
function fn3(this: Window) {
    alert(this)
}

// 这里的box1如果不存在就会报错。strictNullChecks设置为true
let box1 = document.getElementById('box1')
box1.addEventListener('click', function(){
    alert('哈哈哈')
})
box1?.addEventListener('click', function(){
    alert('哈哈哈')
})