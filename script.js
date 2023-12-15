// 在 script.js 文件中添加以下內容

document.addEventListener('DOMContentLoaded', function () {
    // 登錄和註冊表單
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // 登錄、註冊、和返回登錄的連結
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');

    // 登錄、註冊、和功能區域的容器
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');
    const loggedInContainer = document.getElementById('loggedInContainer');

    // 連結到地圖、機器人位置、和感測器數據的連結
    const mapLink = document.getElementById('mapLink');
    const robotLocationLink = document.getElementById('robotLocationLink');
    const sensorDataLink = document.getElementById('sensorDataLink');

    // 模擬登錄操作
    function simulateLogin() {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
        loggedInContainer.style.display = 'block';
    }

    // 模擬註冊操作
    function simulateRegister() {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
        loggedInContainer.style.display = 'block';
    }

    // 切換到註冊介面
    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });

    // 切換回登錄介面
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // 監聽登錄表單的提交事件
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // 在實際應用中，這裡應該有用於驗證和處理登錄的邏輯
        // 模擬登錄成功
        simulateLogin();
    });

    // 監聽註冊表單的提交事件
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // 在實際應用中，這裡應該有用於驗證和處理註冊的邏輯
        // 模擬註冊成功
        simulateRegister();
    });

    // 點擊地圖連結
    mapLink.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('進入地圖');
    });

    // 點擊機器人位置連結
    robotLocationLink.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('進入機器人現在的位置');
    });

    // 點擊感測器數據連結
    sensorDataLink.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('進入感測器的數據');
    });
});
