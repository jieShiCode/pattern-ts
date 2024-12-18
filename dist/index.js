'use strict';

let source = {
    data: "factory-pattern",
};

function say1() {
    console.log("say1");
}
let s1 = "123";
console.log(`s1 is ${s1}`);
console.log(`facotryPattern is ${source.data}`);

exports.say1 = say1;
