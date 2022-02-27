class Sup {
    constructor(a,b) {
        this.a = a
        this.b = b
    }

    print() {
        console.log(this.a, this.b)
    }
}

class Sub extends Sup {
    constructor(a,b,c) {
        super(a,b);
        this.c = c
    }

    print() {
        console.log(this.a, this.b, this.c)
    }
}

let sub = new Sub(1,2,3)
sub.print()