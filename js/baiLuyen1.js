/* 
 Khối 1: Input
 edge1, edge2 ( độ dài của 2 cạnh góc vuông )

 Khối 2: Các bước xử lý
    B1: Khai báo biến lưu trữ độ dài các cạnh
    B2: Lập công thức tính toán
        edge1 * edge1 + edge2 * edge2 = edge3 * edge3
    => Lấy căn bậc 2 edge3 * edge3
    => Math.sqrt(edge3 * edge3) => Lấy căn bậc 2 => Kết quả cuối cùng của edge3
    B3: Hiển thị kết quả


 Khối 3: Output
 edge3 (Cạnh huyền)
*/

var edge1 = 3;
var edge2 = 4;
// Math.pow(giá trị, số mũ)
var edge3 = Math.sqrt(Math.pow(edge1, 2) + Math.pow(edge2, 2));

console.log(edge3);
