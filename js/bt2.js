//Bài tập tính tiền điện
/**
 * Khối 1  Input
 * Tên và số Kw đã sủ dụng
 * Khối 2  Xử lý
 * B1: khai báo các biến thẻ input, output
 * B2: Gắn sự kiện click cho Button, gán giá trị cho thẻ input
 * B3: Xây dụng hàm if ứng với các quy tắc trong đề bài
 * Khối 3 Output
 * Hiển thị kết quả trên UI
 */
var Name, Kw, Res;
document.getElementById("CalBtn_Bt2").onclick = function () {
    Kw = parseFloat(document.getElementById("inKw").value);
    Name = document.getElementById("inName").value;

    console.log(Kw,Name);

    if (Kw <= 50) {
        Res = 500 * Kw;
    } else if (Kw <= 100) {
        Res = 500 * 50 + (Kw - 50) * 650;
    } else if (Kw <= 200) {
        Res = 500 * 50 + 650 * 50 + (Kw - 100) * 850;
    } else if (Kw <= 350) {
        Res = 500 * 50 + 650 * 50 + 100 * 850 + (Kw - 200) * 1100;
    } else {
        Res = 500 * 50 + 650 * 50 + 100 * 850 + 150 * 1100 + (Kw - 350) * 1300;
    }
var Name, Kw, Res;
    document.getElementById("txtResult2").innerHTML = "Họ và tên: " + Name + "; Tiền điện: " + Res +"₫" ;
}