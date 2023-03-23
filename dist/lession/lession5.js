"use strict";
//reset parameter
let color = function (...color1) {
    for (let i in color1) {
        console.log(color1[i]);
    }
};
//spread parameter
let color1 = function (...col) {
    for (let i in col) {
        console.log(col[i]);
    }
};
let obj = {
    fname: "test",
    fun: () => {
        console.log("test");
    }
};
let { fname, fun, test1 } = obj;
fun();
