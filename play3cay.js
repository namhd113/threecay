class PLay3cay {
    constructor(name, bet, money) {
        this.name = name;
        this.name = this.name ? this.name : "Bạn";
        this.bet = +bet;
        this.money = +money;
        this.list = [];
        this.listSelect = [];
        this.cardtype = ["clubs", "spades", "diamonds", "hearts"];
        this.number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    selectCard(rdb, rdc, rd1, rd2) {
        let arr = [];
        for (let i = 0; i < this.cardtype.length; i++) {
            arr[i] = new Array(this.number.length);
            for (let j = 0; j < this.number.length; j++) {
                arr[i][j] = "images/" + this.cardtype[i] + "_" + this.number[j] + ".png";
            }
        }

        let rdi = this.getRandomArbitrary(0, this.cardtype.length);
        let rdj = this.getRandomArbitrary(0, this.number.length);
        if (rdb == rdi && rdc == rdj) {
            return this.selectCard(rdi, rdj);
        }
        if (rd1 == rdi && rd2 == rdj) {
            return this.selectCard(rdi, rdj);
        }
        this.listSelect.push(rdi + "," + rdj);
        return [arr[rdi][rdj], rdi, rdj];
    }

    checkDup(a, b, arr) {
        let dup = a + "," + b;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == dup) {
                return true;
            }
        }
        return false;
    }

    getlist(a, b, c) {
        this.list.push(a);
        this.list.push(b);
        this.list.push(c);
    }

    get3Bai(arr) {
        let a = this.selectCard();
        let b = this.selectCard(a[1], a[2]);
        let c = this.selectCard(b[1], b[2], a[1], a[2]);

        if (this.name == "Chủ cái") {
            if (this.checkDup(a[1], a[2], arr)) {
                a = this.selectCard();
            }
            if (this.checkDup(b[1], b[2], arr)) {
                b = this.selectCard(a[1], a[2]);
            }
            if (this.checkDup(c[1], c[2], arr)) {
                c = this.selectCard(b[1], b[2], a[1], a[2]);
            }
        }

        let a1 = +(a[0].substr(a[0].length - 5)[0]);
        let b1 = +(b[0].substr(b[0].length - 5)[0]);
        let c1 = +(c[0].substr(c[0].length - 5)[0]);
        let total = a1 + b1 + c1;

        this.getlist(a1, b1, c1);
        this.changeImg(a[0], b[0], c[0]);

        if (total <= 10) {
            return total;
        } else {
            let lastDiem = parseInt(total.toString().charAt(1));
            if (lastDiem == 0) return 10;
            else return lastDiem;
        }
    }

    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    changeImg(a, b, c) {
        if (this.name == "Chủ cái") {
            sleep(500).then(() => {
                document.getElementById(4).src = a;
                sleep(1000).then(() => {
                    document.getElementById(5).src = b;
                    sleep(1000).then(() => {
                        document.getElementById(6).src = c;
                    });
                });
            });
        } else {
            sleep(500).then(() => {
                document.getElementById(1).src = a;
                sleep(1000).then(() => {
                    document.getElementById(2).src = b;
                    sleep(1000).then(() => {
                        document.getElementById(3).src = c;
                    });
                });
            });
        }
    }


    winMoney() {
        let current = this.money + this.bet;
        saveData(current);
        return current;
    }

    lostMoney() {
        let current = this.money - this.bet;
        saveData(current);
        return current;
    }
}
