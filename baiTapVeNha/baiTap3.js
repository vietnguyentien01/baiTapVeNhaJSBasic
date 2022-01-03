/* 
    Block 1: Input
    1 USD = 23.500 VND;
    usdToVnd (giả sử là 3 USD sẽ bằng 70.500)

    Block 2:
    B1: Khởi tạo biến lưu trữ USD và VND
    USD, VND
    B2: Lập công thức chuyển đổi từ USD sang VND
    usdToVnd = USD * VND;
    
    Block 3: Output
    usdToVnd (Tiền sau khi quy đổi)
*/

var USD = 3;
var VND = 23.5;
var usdToVnd = 0;

usdToVnd = USD * VND;

console.log(
  "Số tiền sau khi quy đổi từ \n" +
    USD +
    " USD " +
    "là: " +
    usdToVnd +
    " VND"
);
