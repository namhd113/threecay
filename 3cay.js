var diem2 = '';
var play2 = '';

function choi3cay() {
    if (loadData(500) <= 0){
        alert("Bạn hết tiền rồi, không thể chơi tiếp");
        return;
    }

    let name2 = document.getElementById("player2").value;
    let bet = document.getElementById("bet").value;
    play2 = new PLay3cay(name2, bet, loadData(500));
    diem2 = play2.get3Bai();
    document.getElementById("VonDau").innerHTML = "Vốn ban đầu của " + play2.name + " là: " + play2.money + "k";
    document.getElementById("playeroutput").innerHTML = "Điểm của " + play2.name + " là: " + diem2 + " (" + play2.list + ")";
}

function reset3cay() {
    document.getElementById(1).src = "images/down-card.png";
    document.getElementById(2).src = "images/down-card.png";
    document.getElementById(3).src = "images/down-card.png";
    document.getElementById(4).src = "images/down-card.png";
    document.getElementById(5).src = "images/down-card.png";
    document.getElementById(6).src = "images/down-card.png";
}

function chucai() {
    if (!diem2) {
        alert("Người chơi cần mở bài trước.");
        return;
    }
    if (play2.lostMoney() < 0) {
        alert("Bạn hết tiền rồi!!!.")
    }
    let chuNhaplay = new PLay3cay("Chủ cái");
    let diemChucai = chuNhaplay.get3Bai(play2.listSelect);

    document.getElementById("chucaioutput").innerHTML = "Điểm của " + chuNhaplay.name + " là: " + diemChucai + " (" + chuNhaplay.list + ")";

    if (diemChucai > diem2) {
        document.getElementById("res").innerHTML = chuNhaplay.name + " thắng rồi !!!";
        //document.getElementById("res1").innerHTML = "Điểm của " + chuNhaplay.name + " là: " + diemChucai + " (" + chuNhaplay.list + ")";
        //document.getElementById("res2").innerHTML = "Điểm của " + play2.name + " là: " + diem2 + " (" + play2.list + ")";
        document.getElementById("bet_res").innerHTML = "Bạn đặt cược " + play2.bet + "k. Số tiền còn lại là: " + play2.lostMoney() + "k";

    }
    if (diemChucai < diem2) {
        document.getElementById("res").innerHTML = play2.name + " thắng rồi !!!";
        //document.getElementById("res1").innerHTML = "Điểm của " + chuNhaplay.name + " là: " + diemChucai + " (" + chuNhaplay.list + ")";
        //document.getElementById("res2").innerHTML = "Điểm của " + play2.name + " là: " + diem2 + " (" + play2.list + ")";
        document.getElementById("bet_res").innerHTML = "Bạn đặt cược " + play2.bet + "k. Số tiền còn lại là: " + play2.winMoney() + "k";
    }
    if (diemChucai == diem2) {
        document.getElementById("res").innerHTML = "Hoà rồi";
        //document.getElementById("res1").innerHTML = "Điểm của " + chuNhaplay.name + " là: " + diemChucai + " (" + chuNhaplay.list + ")";
        //document.getElementById("res2").innerHTML = "Điểm của " + play2.name + " là: " + diem2 + " (" + play2.list + ")";
        document.getElementById("bet_res").innerHTML = "Bạn không mất thêm gi cả.";
    }
}

