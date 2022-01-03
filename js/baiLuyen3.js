var tenPhim = "No Way Home";
var soVeNguoiLon = 50;
var soVeTreEm = 40;
var giaVeNguoiLon = 50000;
var giaVeTreEm = 25000;
var phanTramTuThien = 10;
var soLuongVe = 0;
var doanhThu = 0;
var tienTuThien = 0;
var tienConLai = 0;

soLuongVe = soVeNguoiLon + soVeTreEm;
doanhThu = soVeNguoiLon * giaVeNguoiLon + soVeTreEm * giaVeTreEm;
tienTuThien = doanhThu * 10 / 100;
tienConLai = doanhThu - tienTuThien;

console.log("Tên phim: " + tenPhim + "\n Số lượng vé: " + soLuongVe);
