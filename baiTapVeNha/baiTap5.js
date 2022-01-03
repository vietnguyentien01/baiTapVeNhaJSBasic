/* 
    Block 1: Input
    cho 1 số có 2 chữ số (24)

    Block 2: 
    B1: Khai báo biến lưu trữ cho số đã cho trước
    num, ten, unit, total
    B2: Lập công thức tính tổng 2 ký số
    ten = Math.floor(num / 10) => 2
    unit = num % 10 => 4
    B3: Tính tổng
    total = ten + unit;
    B4: Hiển thị kết quả

    Block 3: Output
    total (Tổng của 2 ký số)
*/

var num = 24;
var ten = 0;
var unit = 0;
var total = 0;

ten = Math.floor(num / 10);
unit = num % 10;

total = ten + unit;

console.log("Tổng của 2 ký số là: " + total);
