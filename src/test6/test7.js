//深拷贝
function copy(obj) {
    let res = obj instanceof Array ? []: {}
    for(let [k,v] of Object.entries(obj)) {
        res[k] = typeof v == 'object' ? copy(v) : v
    }

    return res
}

//原型工厂
function extend(sub,sup) {
    sub.prototype = Object.create(sup.prototype)
    Object.defineProperty(sub.prototype, 'constructor', {
        value: sub,
        enumerable: false
    })
}

//方法继承
let a = {
    a() {
        return "aaa"
    }
}
let b = {
    __proto__: a,
    b() {
        console.log(super.a() + "bbb")
    }
}

//打包原理
let module = (function(){
    let moduleList = {}
    let define = function(name, module, action) {
        module.map((item, index) => {
            module[index] = moduleList[item]
        })
        moduleList[name] = action.apply(null , module)
    }

    return {moduleList, define}
})()

module.define('a1', [], function() {
    return {
        a1: 1,
        max() {}
    }
})


module.define('a2', [], function() {
    return {
        a2: 2,
        min() {}
    }
})

module.define('c', ['a1', 'a2'], function (a1, a2) {
    console.log(a1, a2)
})
