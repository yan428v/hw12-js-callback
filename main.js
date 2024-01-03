function goodPassword(pass, fn1, fn2) {
    if (typeof pass !== "number") {
        return console.log(`error of type: ${typeof pass}`);
    } else if (pass > 1000) {
        return fn1();
    } else if (pass < 0) {
        return fn2();
    } else if (pass >= 0 && pass <= 1000) {
         return console.log("Pass between 0 to 1000");
    }
}
function goodFunc() {
    console.log("good pass");
}
function badFunc() {
    console.log("bad pass");
}
goodPassword(63, () => console.log("good pass"), badFunc);