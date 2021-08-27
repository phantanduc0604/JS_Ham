//Tính thuế thu nhập cá nhân
/**
 * Khối 1 Input
 * Tên, Tổng thu nhập năm và Số người phụ thuộc
 * Khối 2 Xử lý
 * B1: Khai báo các biến thẻ input, output
 * B2: Găn sự kiện click cho Button, gán giá trị cho các thẻ input
 * B3: Xây dụng hàm if ưgns với các quy tắc trong đề bài và áp dụng công thức : Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 * Khối 3 Output
 * HIện thị kết quả lên UI
 */
var Name_bt3, Income, Mem, Tex, Sum;
document.getElementById("CalBtn_Bt3").onclick = function () {
    Name = document.getElementById("inName_bt3").value;
    Income = parseFloat(document.getElementById("inIncome").value);
    Mem = parseInt(document.getElementById("inMen").value);
    
    if (Income <= 4000000) {
        alert("Số tiền không hợp lệ")
    } else {
        Sum = Income - 4000000 - Mem * 1600000;
        if (Sum <= 60000000) {
            Tex = parseFloat(Sum * 5 / 100);
        }else if(Sum <= 120000000){
            Tex = parseFloat(Sum * 10 / 100);
        }else if(Sum <= 210000000){
            Tex = parseFloat(Sum * 15 / 100);
        }else if(Sum <= 384000000){
            Tex = parseFloat(Sum * 20 / 100);
        }else if(Sum <= 624000000){
            Tex = parseFloat(Sum * 25 / 100);
        }else if(Sum <= 960000000){
            Tex = parseFloat(Sum * 30 / 100);
        }else{
            Tex = parseFloat(Sum * 35 / 100);
        }
    }
   document.getElementById("txtResult_Bt3").innerHTML = "Họ tên: " + Name + "; " + "Tiền thuế thu nhập cá nhân là: " + Tex +"VND";
   
}