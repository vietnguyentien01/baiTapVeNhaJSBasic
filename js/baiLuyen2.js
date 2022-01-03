var num = 586;
var hund = 0;
var ten = 0;
var unit = 0;
var total = 0;

hund = Math.floor(num / 100);
phanDu = num % 100;

ten = Math.floor(phanDu / 10);
unit = phanDu % 10;

total = hund + ten + unit;
console.log(total);
