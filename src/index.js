import './style.css';
import goblinImg from './goblin.png';

// Получаем контейнер для игрового поля
const gameContainer = document.getElementById('game-container');

// Функция создания игрового поля
function createGameField() {
  gameContainer.innerHTML = ''; // Очищаем поле перед созданием
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameContainer.appendChild(cell);
  }
}

// Получение случайного индекса для клетки
function getRandomCell(excludeIndex) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * 16); // Генерируем случайное число от 0 до 15
  } while (randomIndex === excludeIndex); // Исключаем текущий индекс
  return randomIndex;
}

// Функция перемещения гоблина
function moveGoblin() {
  const cells = document.querySelectorAll('.cell'); // Получаем все клетки
  const currentCell = document.querySelector('.cell img'); // Проверяем, где находится гоблин

  // Если гоблин уже есть, удаляем его из текущей ячейки
  if (currentCell) {
    currentCell.remove();
  }

  // Выбираем новую случайную клетку
  const newIndex = getRandomCell(currentIndex);
  cells[newIndex].appendChild(goblin); // Добавляем гоблина в новую клетку
  currentIndex = newIndex; // Обновляем текущий индекс
}

// Создаем игровое поле
createGameField();

// Создаем гоблина (картинку)
const goblin = document.createElement('img');
goblin.src = goblinImg;
goblin.alt = 'Goblin';
goblin.classList.add('goblin'); // Для удобства стилей или отладки

// Переменная для текущего индекса
let currentIndex = -1;

// Перемещаем гоблина в начальную случайную клетку
moveGoblin();

// Запускаем перемещение гоблина каждые 1000 мс
setInterval(moveGoblin, 1000);
