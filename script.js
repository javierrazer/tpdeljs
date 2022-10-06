var num_1 = 2,
    num_2 = 3;
console.log(num_1 + num_2);



let x = 10;
let y = 20;

let z = y - x;

console.log(z);

function multiplica(c, d) {
    return c > 0 ? multiplica(c - 1, d) + d : 0;
}

console.log(
    multiplica(2, 3),
    multiplica(3, 4),
    multiplica(4, 5),
    multiplica(5, 6),
    multiplica(2, -6)
);

var a = 13;
var b = 5;
var quo = ~~(a / b);
var rem = a % b;
console.log('Quotient = ', quo, 'Remainder = ', rem);