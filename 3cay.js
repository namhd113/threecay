document.getElementById("VonDau").innerHTML = "Vốn ban đầu: " + loadData(500) + "k";
var diemPlayer = '';
var player = '';

function choi3cay() {

    if (loadData(500) <= 0) {
        alert("Bạn hết tiền rồi, không thể chơi tiếp.");
        return;
    }

    reset3cay();

    let playerName = document.getElementById("playerName").value;
    let bet = document.getElementById("bet").value;

    player = new PLay3cay(playerName, bet, loadData(500));
    diemPlayer = player.get3Bai();
    document.getElementById("VonDau").innerHTML = "Vốn ban đầu của " + player.name + " là: " + player.money + "k";
    sleep(3000).then(() => {
        document.getElementById("playeroutput").innerHTML = "Điểm của " + player.name + " là: " + diemPlayer + " (" + player.list + ")";
    });
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function chucai() {

    if (!diemPlayer) {
        alert("Người chơi cần mở bài trước.");
        return;
    }

    if (player.lostMoney() <= 0) {
        alert("Bạn hết tiền rồi!!!.");
        return;
    }

    let chuCaiPlay = new PLay3cay("Chủ cái");
    let diemChucai = chuCaiPlay.get3Bai(player.listSelect);

    sleep(3000).then(() => {
        document.getElementById("chucaioutput").innerHTML = "Điểm của " + chuCaiPlay.name + " là: " + diemChucai + " (" + chuCaiPlay.list + ")";
    });

    if (diemChucai > diemPlayer) {
        sleep(4000).then(() => {
            document.getElementById("res").innerHTML = chuCaiPlay.name + " thắng rồi !!!";
            document.getElementById("bet_res").innerHTML = "Bạn đặt cược " + player.bet + "k. Số tiền còn lại là: " + player.lostMoney() + "k";
        });
    }
    if (diemChucai < diemPlayer) {
        sleep(4000).then(() => {
            document.getElementById("res").innerHTML = player.name + " thắng rồi !!!";
            document.getElementById("bet_res").innerHTML = "Bạn đặt cược " + player.bet + "k. Số tiền còn lại là: " + player.winMoney() + "k";
        });
    }
    if (diemChucai == diemPlayer) {
        sleep(4000).then(() => {
            document.getElementById("res").innerHTML = "Hoà rồi";
            document.getElementById("bet_res").innerHTML = "Bạn không mất thêm gi cả.";
        });
    }
}

function reset3cay() {
    document.getElementById(1).src = "images/down-card.png";
    document.getElementById(2).src = "images/down-card.png";
    document.getElementById(3).src = "images/down-card.png";
    document.getElementById(4).src = "images/down-card.png";
    document.getElementById(5).src = "images/down-card.png";
    document.getElementById(6).src = "images/down-card.png";
    document.getElementById("res").innerHTML = "";
    document.getElementById("bet_res").innerHTML = "";
    document.getElementById("chucaioutput").innerHTML = "";
    document.getElementById("playeroutput").innerHTML = "";
}
