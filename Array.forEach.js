


var array1 = [1, 2, 3];
var num = 1;
var text = "string";
var doSomething = function(element){
    console.log(element);
};

array1.forEach(function(element) {
  console.log(element);
});




function forEach(func, thing) {
    if (Object.prototype.toString.call(func) !== "[object Function]" || Object.prototype.toString.call(thing) !== "[object Array]") {
        console.log("The parameters provided are incorrect.\nYou must provide a Function and an Array.");
        console.log("\nParameter 1: " + Object.prototype.toString.call(func));
        console.log("\nParameter 2: " + Object.prototype.toString.call(thing));
        } else {
            for (let i = 0; i < thing.length; i++) {
                func(b[i]);
            };
    }
};

forEach(doSomething, array1);
