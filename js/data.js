function saveData(data) {
    localStorage.setItem('money', data);
}

function saveOldData(key, data) {
    localStorage.setItem(key, data);
}

function loadOldData(key) {
    return localStorage.getItem(key);
}

function removeLocal(key) {
    localStorage.removeItem(key);
}

function loadData(m) {
    if (localStorage.hasOwnProperty('money')) {
        return +localStorage.getItem('money');
    } else {
        return m;
    }
}

function resetMoney(m) {
    localStorage.setItem('money', m);
    alert("Money reset to 500k.");
    return;
}
