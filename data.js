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
    localStorage.removeItem('money');
    alert("Money reset to 500k.")
}