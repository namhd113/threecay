function saveData(data) {
    localStorage.setItem('money', data);
}

function loadData(m) {
    if (localStorage.hasOwnProperty('money')) {
        return +localStorage.getItem('money');
    } else {
        return m;
    }
}

function resetMoney() {
    //localStorage.clear();
    //localStorage.removeItem('money');
    localStorage.setItem('money', 500);
    alert("Money reset to 500k.")
}