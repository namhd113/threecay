//document.getElementById("VonDau").innerHTML = "Vốn ban đầu: " + loadData(500) + "k";
var diemPlayer = '';
var player = new PLay3Card(loadOldData('playername'), loadOldData('bet'), loadData(500));

if (!loadOldData('diemchucai') && loadOldData('diemplayer')) {
    diemPlayer = loadOldData('diemplayer');
    sleep(1000).then(() => {
        document.getElementById("playerOutPut").innerHTML = "Điểm cũ của bạn là: " + diemPlayer + " (" + JSON.parse(loadOldData("diemlist_card")) + ")";
    });
    var listSelect = JSON.parse(loadOldData("diemplayer_card"));
    for (let i = 0; i < listSelect.length; i++) {
        //console.log(listSelect[i].split(","));
        //document.getElementById(i+1).src = "images/down-card.png";
        let byID = +(i + 1);
        document.getElementById(byID).src = player.selectCardbyID(listSelect[i].split(",")[0], listSelect[i].split(",")[1]);
    }
}

function choi3cay() {

    if (loadData(500) <= 0) {
        alert("Bạn hết tiền rồi, không thể chơi tiếp.");
        return;
    }

    if (!loadOldData('diemchucai') && loadOldData('diemplayer')) {
        alert("Đến lượt chủ cái mở bài.");
        return;
    }

    reset3cay();

    player = new PLay3Card(loadOldData('playername'), loadOldData('bet'), loadData(500));

    diemPlayer = player.get3Card();
    saveOldData("diemplayer", diemPlayer);
    saveOldData("diemplayer_card", JSON.stringify(player.listSelect));
    saveOldData("diemlist_card", JSON.stringify(player.list));

    document.getElementById("VonDau").innerHTML = "Vốn ban đầu của " + player.name + " là: " + player.money + "k";
    sleep(6000).then(() => {
        document.getElementById("playerOutPut").innerHTML = "Điểm của " + player.name + " là: " + diemPlayer + " (" + player.list + ")";
    });
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function setBet() {
    saveOldData("bet", document.getElementById("bet").value);
}

function setName() {
    saveOldData("playername", document.getElementById("playerName").value);
}

function chucai() {

    if (!diemPlayer) {
        alert("Người chơi cần mở bài trước.");
        return;
    }

    if (!loadOldData('diemchucai') && !loadOldData('diemplayer')) {
        alert("Người chơi cần mở bài trước.");
        return;
    }

    if (loadData(500) <= 0) {
        alert("Bạn hết tiền rồi!!!.");
        return;
    }

    let chuCaiPlay = new PLay3Card("Chủ cái");
    let diemChucai = chuCaiPlay.get3Card(player.listSelect ? player.listSelect : listSelect);
    saveOldData("diemchucai", diemChucai);
    sleep(6000).then(() => {
        document.getElementById("chuCaiOutPut").innerHTML = "Điểm của " + chuCaiPlay.name + " là: " + diemChucai + " (" + chuCaiPlay.list + ")";
    });

    removeLocal("diemplayer");
    removeLocal("diemchucai");
    removeLocal("diemplayer_card");
    removeLocal("diemlist_card");

    if (diemChucai > diemPlayer) {
        sleep(6000).then(() => {
            document.getElementById("res").innerHTML = chuCaiPlay.name + " thắng rồi !!!";
            document.getElementById("bet_res").innerHTML = "Bạn đặt cược " + player.bet + "k. Số tiền còn lại là: " + player.lostMoney() + "k";
        });
    }
    if (diemChucai < diemPlayer) {
        sleep(6000).then(() => {
            document.getElementById("res").innerHTML = player.name + " thắng rồi !!!";
            document.getElementById("bet_res").innerHTML = "Bạn đặt cược " + player.bet + "k. Số tiền còn lại là: " + player.winMoney() + "k";
        });
    }
    if (diemChucai == diemPlayer) {
        sleep(6000).then(() => {
            document.getElementById("res").innerHTML = "Hoà rồi";
            document.getElementById("bet_res").innerHTML = "Bạn không mất thêm gi cả.";
        });
    }
}

function reset3cay() {
    document.getElementById("VonDau").innerHTML = "Vốn ban đầu: " + loadData(500) + "k";
    document.getElementById(1).src = "images/down-card.png";
    document.getElementById(2).src = "images/down-card.png";
    document.getElementById(3).src = "images/down-card.png";
    document.getElementById(4).src = "images/down-card.png";
    document.getElementById(5).src = "images/down-card.png";
    document.getElementById(6).src = "images/down-card.png";
    document.getElementById("res").innerHTML = "";
    document.getElementById("bet_res").innerHTML = "";
    document.getElementById("chuCaiOutPut").innerHTML = "";
    document.getElementById("playerOutPut").innerHTML = "";
}
