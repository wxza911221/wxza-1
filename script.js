// 登錄表單
const loginContainer = document.getElementById('loginContainer');
const loginLink = document.getElementById('loginLink');

// 註冊表單
const registerContainer = document.getElementById('registerContainer');
const registerLink = document.getElementById('registerLink');

// 登錄後的功能區域
const loggedInContainer = document.getElementById('loggedInContainer');

// 三個功能區域的連結
const monitoringLink = document.getElementById('monitoringLink');
const mapLink = document.getElementById('mapLink');
const robotLocationLink = document.getElementById('robotLocationLink');

// 模擬登錄操作
function simulateLogin() {
    loginContainer.style.display = 'none';
    loggedInContainer.style.display = 'block';
}

// 模擬註冊操作
function simulateRegister() {
    registerContainer.style.display = 'none';
    loggedInContainer.style.display = 'block';
}

// 切換到註冊介面
registerLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
});

// 切換到登錄介面
loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// 監聽登錄表單的提交事件
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // 在實際應用中，這裡應該有用於驗證和處理登錄的邏輯

    // 模擬登錄成功
    simulateLogin();
});

// 監聽註冊表單的提交事件
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // 在實際應用中，這裡應該有用於處理註冊的邏輯

    // 模擬註冊成功
    simulateRegister();
});

// 在這裡添加點擊功能連結後的相應操作
monitoringLink.addEventListener('click', function (event) {
    event.preventDefault();
    // 在這裡執行進入監測記錄的操作
    console.log('進入監測記錄');
});

mapLink.addEventListener('click', function (event) {
    event.preventDefault();
    // 在這裡執行進入地圖的操作
    console.log('進入地圖');
});

robot
