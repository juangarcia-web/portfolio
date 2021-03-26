function addition() {
    let a = 5;
    let b = 10;
    let sum = a+b;
    console.log(sum);
}

function rest() {
    let a = 5;
    let b = 10;
    let res = a-b;
    console.log(res);
}

function result() {
    const a = addition()
    const b = rest()
    console.log(a,b);
}

result()