class Station {
    path = null;
    marker = null;
    point = null;

    constructor(args) {
        this.label = args.label;
        this.level = args.level;
        this.address = args.address;
    }

    getName() {
        return this.name
    }

    set path(path) {
        this.path = path
        this.point = new BMapGL.Point(path[0], path[1]);
    }
}

let s = new Station('八中', 1, [111,23, 22])

// let wm = new WeakMap();
// wm.set({aaa:111}, s)
// console.log(wm)

let stations = new Map();
stations.set(Symbol('八中'), s)
