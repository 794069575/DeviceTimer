// script.js
const rates = 35; // 每小时的费用
let timers = {};
let startTimes = {};

function startTimer(id) {
    if (timers[id]) {
        alert('该设备已开始！');
        return;
    }
    startTimes[id] = new Date();
    timers[id] = setInterval(() => updateDisplay(id), 1000);
    document.getElementById(`timer${id}`).innerText = '运行中...';
}

function stopTimer(id) {
    if (!timers[id]) {
        alert('该设备尚未开始！');
        return;
    }
    clearInterval(timers[id]);
    timers[id] = null;
    const duration = (new Date() - startTimes[id]) / 1000 / 3600; // 计算小时数
    const cost = duration * rates;
    document.getElementById(`timer${id}`).innerText = `总时间: ${duration.toFixed(2)}小时`;
    document.getElementById(`cost${id}`).innerText = `费用: ${cost.toFixed(2)}元`;
}

function updateDisplay(id) {
    const currentTime = new Date();
    const duration = (currentTime - startTimes[id]) / 1000 / 3600; // 计算小时数
    const cost = duration * rates;
    document.getElementById(`timer${id}`).innerText = `运行中... ${duration.toFixed(2)}小时`;
    document.getElementById(`cost${id}`).innerText = `费用: ${cost.toFixed(2)}元`;
}