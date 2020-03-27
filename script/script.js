//Переменные
let num = 266219;
num1 = num%10,
num2 = num/10,
num3 = num2/10,
num4 = num3/10,
num5 = num4/10,
num6 = num5/10;

num2 = Math.floor (num2%10);
num3 = Math.floor (num3%10);
num4 = Math.floor (num4%10);
num5 = Math.floor (num5%10);
num6 = Math.floor (num6%10);

let multiplication = num1*num2*num3*num4*num5*num6,
extent = multiplication**3,
extent1 = Math.floor(extent/100000000);

//Вывод в консоль
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
//console.log(extent);
console.log(extent1);

//Вывод на экран

document.write(extent1);


