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