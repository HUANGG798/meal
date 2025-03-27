const dinnerOptions = [
    '台式炒麵',
    '日式拉麵',
    '韓式烤肉',
    '義大利麵',
    '泰式炒飯',
    '港式燒臘',
    '台式滷肉飯',
    '日式壽司',
    '韓式炸雞',
    '美式漢堡',
    '台式牛肉麵',// 從 localStorage 獲取選項，如果沒有則使用預設選項
let dinnerOptions = JSON.parse(localStorage.getItem('dinnerOptions')) || [
    '台式炒麵',
    '日式拉麵',
    '韓式烤肉',
    '義大利麵',
    '泰式炒飯',
    '港式燒臘',
    '台式滷肉飯',
    '日式壽司',
    '韓式炸雞',
    '美式漢堡',
    '台式牛肉麵',
    '日式咖哩飯',
    '韓式部隊鍋',
    '義式披薩',
    '泰式冬陰功',
    '港式點心',
    '台式鹽酥雞',
    '日式天婦羅',
    '韓式石鍋拌飯',
    '美式牛排'
];

const resultElement = document.getElementById('result');
const generateBtn = document.getElementById('generateBtn');
const optionsList = document.getElementById('optionsList');
const newOptionInput = document.getElementById('newOption');
const addBtn = document.getElementById('addBtn');

// 保存選項到 localStorage
function saveOptions() {
    localStorage.setItem('dinnerOptions', JSON.stringify(dinnerOptions));
}

// 顯示所有選項
function displayOptions() {
    optionsList.innerHTML = ''; // 清空現有列表
    dinnerOptions.forEach((option, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${option}
            <button class="delete-btn" data-index="${index}">×</button>
        `;
        optionsList.appendChild(li);
    });
}

// 新增選項
function addOption() {
    const newOption = newOptionInput.value.trim();
    if (newOption && !dinnerOptions.includes(newOption)) {
        dinnerOptions.push(newOption);
        saveOptions();
        displayOptions();
        newOptionInput.value = ''; // 清空輸入框
    } else if (dinnerOptions.includes(newOption)) {
        alert('這個選項已經存在！');
    }
}

// 刪除選項
function deleteOption(index) {
    dinnerOptions.splice(index, 1);
    saveOptions();
    displayOptions();
}

function getRandomDinner() {
    const randomIndex = Math.floor(Math.random() * dinnerOptions.length);
    return dinnerOptions[randomIndex];
}

function animateResult() {
    let count = 0;
    const maxCount = 10;
    const interval = 100;
    
    const animation = setInterval(() => {
        resultElement.textContent = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
        count++;
        
        if (count >= maxCount) {
            clearInterval(animation);
            resultElement.textContent = getRandomDinner();
        }
    }, interval);
}

// 事件監聽器
generateBtn.addEventListener('click', animateResult);
addBtn.addEventListener('click', addOption);
newOptionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addOption();
    }
});

optionsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = parseInt(e.target.dataset.index);
        deleteOption(index);
    }
});

// 初始化
displayOptions(); 
    '日式咖哩飯',
    '韓式部隊鍋',
    '義式披薩',
    '泰式冬陰功',
    '港式點心',
    '台式鹽酥雞',
    '日式天婦羅',
    '韓式石鍋拌飯',
    '美式牛排'
];

const resultElement = document.getElementById('result');
const generateBtn = document.getElementById('generateBtn');
const optionsList = document.getElementById('optionsList');

// 顯示所有選項
function displayOptions() {
    dinnerOptions.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        optionsList.appendChild(li);
    });
}

function getRandomDinner() {
    const randomIndex = Math.floor(Math.random() * dinnerOptions.length);
    return dinnerOptions[randomIndex];
}

function animateResult() {
    let count = 0;
    const maxCount = 10;
    const interval = 100;
    
    const animation = setInterval(() => {
        resultElement.textContent = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
        count++;
        
        if (count >= maxCount) {
            clearInterval(animation);
            resultElement.textContent = getRandomDinner();
        }
    }, interval);
}

// 初始化
displayOptions();
generateBtn.addEventListener('click', animateResult); 
