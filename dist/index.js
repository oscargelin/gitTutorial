"use strict";
let numbers = [10, 9, 8, 7, 6, 5, 4, 3];
let names = [
    "Oscar",
    "John",
    "Adam",
    "Wiktor",
    "Sebastian",
    "Henrik",
];
let bools = [true, false, true, false, true, false];
numbers.forEach((num) => {
    if (num % 2 == 0) {
        console.log("Even steven");
    }
    else {
        console.log("Uneven Meven");
    }
});
names.forEach((name) => {
    if (name.length > 4) {
        console.log("Huuuuge numbe browski");
    }
    else {
        console.log("runnin' bit short there ye");
    }
});
bools.forEach((bool) => {
    if (bool) {
        console.log("Yeeeee b00dy");
    }
    else {
        console.log("Naaaw son");
    }
});
//# sourceMappingURL=index.js.map