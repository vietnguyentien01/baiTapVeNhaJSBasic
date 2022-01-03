/* 
    Block 1: Input
    Số nguyên có 3 chữ số (giả sử 18821)

    Block 2: 
    B1: Khởi tạo biến lưu trữ 5 chữ số
    num ,tensThou, thou, hund, ten, unit, total
    B2: Lấy số hàng chục nghìn
        tensThou = Math.floor(num/10000) => Math.floor(18821/10000) => 1
        phanDu = num % 10000 => 18821 % 10000 => 8821
    B3: Lấy số hàng nghìn, trăm, chục, đơn vị
        thou = Math.floor(phanDu/1000) => 8
        phanDu2 = phanDu % 1000 => 821
        hund = Math.floor(phanDu2 / 100) => 8
        phanDu3 = phanDu2 % 100 => 21
        ten = Math.floor(phanDu3 / 10) => 2
        unit = phanDu3 % 10 => 1 
    B4: Tính tổng
        total = tensThou + thou + hund + ten + unit
    B5: Hiển thị kết quả

    Block 3: Output
    Total (Tổng của 5 ký tự số)
    
*/

var num = 18821;
var tensThou = 0;
var thou = 0;
var hund = 0;
var ten = 0;
var unit = 0;
var total = 0;

tensThou = Math.floor(num / 10000);
phanDu = num % 10000;

thou = Math.floor(phanDu / 1000);
phanDu2 = phanDu % 1000;

hund = Math.floor(phanDu2 / 100);
phanDu3 = phanDu2 % 100;

ten = Math.floor(phanDu3 / 10);
unit = phanDu3 % 10;

total = tensThou + thou + hund + ten + unit;

console.log("Kết quả là: " + total);
