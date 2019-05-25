var array1 = [1, 2, 3];
var num = 1;
var text = "string";
var doSomething = function(element){
    console.log(element);
};

array1.forEach(function(element, i) {
  console.log(element);
//  console.log(i);
//   console.log(arr);
});

function forEach(func, thing) {
    let a = func;
    let b = thing;
    if (Object.prototype.toString.call(a) !== "[object Function]" || Object.prototype.toString.call(b) !== "[object Array]") {
        console.log("The parameters provided are incorrect.\nYou must provide a Function and an Array.");
        console.log("\nParameter 1: " + Object.prototype.toString.call(a));
        console.log("\nParameter 2: " + Object.prototype.toString.call(b));
        } else {
            for (let i = 0; i < b.length; i++) {
                doSomething(b[i]);
            };
    }
};

forEach(doSomething, array1);