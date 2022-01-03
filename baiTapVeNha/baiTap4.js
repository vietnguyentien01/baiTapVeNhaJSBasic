/* 
    Block 1: Input
    chiều dài và chiều rộng của hình chữ nhật   (giả sử chiều dài là 15cm và chiều rộng là 10cm)
  
    Block 2:
    B1: Khởi tạo biến lưu trữ chiều dài và chiều rộng của hình chữ nhật
    B2: Lập công thức tính chu vi và diện tích HCN
    Diện tích = dài * rộng
    Chu vi = (dài + rộng) * 2;
    B3: Hiển thị kết quả

    Block 3: Output
    Diện tích và chu vi
*/

var chieuDai = 15;
var chieuRong = 10;
var dienTich = 0;
var chuVi = 0;

dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;

console.log(
  "Diện tích hình chữ nhật là: " +
    dienTich +
    "\n" +
    "Chu vi hình chữ nhật là: " +
    chuVi
);
