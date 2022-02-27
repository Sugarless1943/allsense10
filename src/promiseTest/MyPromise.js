class MyPromise {
    static PENDING = "PENDING"
    static FULFILLED = "fulfilled"
    static REJECTED = "rejected"

    constructor(fn) {
        this.state = "PENDING"
        this.value = null
        fn(this.resolve.bind(this), this.reject.bind(this))
    }

    resolve(value) {
        if(this.state == MyPromise.PENDING) {
            this.state = MyPromise.FULFILLED
            this.value = value
        }
    }

    reject(value) {
        if(this.state == MyPromise.PENDING) {
            this.state = MyPromise.REJECTED
            this.value = value
        }
    }

    then(onFulfilled, onRejected) {
        if(typeof onFulfilled != 'function') {
            onRejected = () => {}
        }

        if(typeof onRejected != 'function') {
            onRejected = () => {}
        }

        return new MyPromise((resolve,reject) => {
            if(this.state == MyPromise.FULFILLED) {
                resolve(onFulfilled(this.value))
            }

            if(this.state == MyPromise.REJECTED) {
                reject(onRejected(this.value))
            }
        })
    }


    static all(promiseArr) {
        return new MyPromise(resolve => {
            let res = []
            promiseArr.map(promise => {
                res.push(promise.value)
            })
            resolve(res)
        })
    }

    static race(promiseArr) {

    }
}