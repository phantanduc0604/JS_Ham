// Bài tập 4

/**
 * Khối 1 input
 * Loại khách hàng
 * Mã khách hàng
 * Số kênh cao cấp
 * Số kết nối
 *
 * Khối 2 Các bước xử lý
 * B1: Tìm thẻ html và lấy giá trị
 * B2: Nếu loại khách hàng "Doanh nghiệp" thì hiển thị Số kết nối và ngược lại
 * B3: Tính tiền cáp
 *   "Nhà dân"
 *  Result = 4,5 + 20,5 + Số kênh cao cấp *7,5
 *  *   "Doanh Nhiệp"
 * 10 kết nối đầu
 *  Result = 15 + 75 + Số kênh cao cấp *50
 * sau 10 kêt nối đầu
 * Result = 15 + 75 + 5*(Số kết nối - 10) + Số kênh cao cấp *50
 *
 * B3 Hiển thị UI
 * Khối 3 Output
 * Xuất ra giá trị Result
 *
 */


var Result, Name__bt4, soKenh, soKetNoi, typeCustom;
document.getElementById("CalBtn_Bt4").onclick = function () {
    Name__bt4 = document.getElementById("Name_bt4").value;
    soKenh = Number(document.getElementById("inputChanel").value);
    soKetNoi = Number(document.getElementById("inputConnect").value);
    typeCustom = document.getElementById("typeCustom").value;

    if (typeCustom == "nhaDan") {
        Result = 4.5 + 20.5 + soKenh * 7.5;
    } else {
        if (soKetNoi <= 10) {
            Result = 15 + 75 + soKenh * 50;
        } else {
            Result = 15 + 75 + 5 * (soKetNoi - 10) + soKenh * 50;
        }
    }
    soKetNoi = 0;
    document.getElementById("txtResult_Bt4").innerHTML = "Mã khách hàng: " + Name__bt4 + "Tiền cáp: $" + Result;

}