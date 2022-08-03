"use strict";
let numbers = [10, 9, 8, 7, 6, 5, 4, 3];
let names = [
    "Oscar",
    "John",
    "Adam",
    "Wiktor",
    "Sebastian",
    "Henrik",
    "Rogerere",
];
let bools = [true, false, true, false, true, false];
let middleNames = ["Carl", "Hugo", "Steffe", "Roffe"];
let lastNames = [
    "Goransson",
    "Andersson",
    "Svensson",
    "Leopoldsson",
    "Stephensson",
    "Rogersson",
];
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
lastNames.forEach((lastName) => {
    console.log(lastName);
});
middleNames.forEach((middleName) => {
    if (middleName.length > 5) {
        console.log(`${middleName} is a bit longk matey`);
    }
    else {
        console.log(`${middleName} is a tad short there shorty`);
    }
});
//# sourceMappingURL=index.js.map