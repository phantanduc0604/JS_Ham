//Bài tập quản lý tuyển sinh
/**
 * Khối 1 Input
 * Điểm chuẩn, Chọn khu vực, Chọn đối tượng, Điểm môn thứ 1, Điểm môn thứ 2, Điểm môn thứ 3
 * Khối 2 Xử lý
 * B1 : khai báo biến thẻ input, output
 * B2 : Gắn xự kiện click cho Button, gán giá trị cho các biến input
 * B3 : Xây dựng hàm đầu tiên so sánh chỉ cần 1 trong điểm môn thi bằng không thì in kết quả rớt
 * B4 : xây dựng hàm so sánh điểm chuẩn với tổng số điểm ba môn cộng vói điẻm ưu tiên nếu lớn hơn hoặc bằng điểm chuẩn thì thông báo đậu và ngược lại
 * 
 * Khối 3 Output
 * Hiển thị kết quả trên UI
 * 
 */
var DC; //Điểm chuẩn
var KV; //Khu vực
var DT; //Đối tượng
var D1; //Điểm môn thứ 1
var D2; //Điểm môn thứ 2
var D3; //Điểm môn thứ 3
document.getElementById("btn1Result").onclick = function () {
    DC = parseFloat(document.getElementById("Diemchuan").value);
    KV = parseFloat(document.getElementById("KV").value);
    DT = parseFloat(document.getElementById("DT").value);
    D1 = parseFloat(document.getElementById("Diem1").value);
    D2 = parseFloat(document.getElementById("Diem2").value);
    D3 = parseFloat(document.getElementById("Diem3").value);

    

    if (D1 == 0 || D2 == 0 || D3 == 0) {
        document.getElementById("txtResult1").innerHTML = "Bạn đã rớt";
       
    } else {
        if ((KV + DT + D1 + D2 + D3) >= DC ) {
            document.getElementById("txtResult1").innerHTML = "Chúc mừng bạn đã đậu với điểm số là " + (KV + DT + D1 + D2 + D3);
            
        } else {
            document.getElementById("txtResult1").innerHTML = "Bạn đã rớt xin chia buồn cùng bạn với số điểm: " + (KV + DT + D1 + D2 + D3);
           
        }
    }

}
