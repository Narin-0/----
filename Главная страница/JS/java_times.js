// function updateLondonTime() {
//     const londonTimeElement = document.getElementById('london-time');
//     const now = new Date();
//     const londonTime = now.toLocaleString('en-GB', {
//       timeZone: 'Europe/London',
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//     });
//     londonTimeElement.textContent = `Время в Лондоне: ${londonTime}`;
//   }
  
//   // Обновляем время каждую секунду
//   setInterval(updateLondonTime, 1000);
  
//   // Вызываем функцию при загрузке страницы
//   updateLondonTime();

// ФУНКЦИЯ ВРЕМЕНИ
function updateTime() {
    const londonTime = new Intl.DateTimeFormat("ru-RU", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(new Date());

    const newYorkTime = new Intl.DateTimeFormat("ru-RU", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(new Date());

    document.getElementById("times").innerHTML = `Время: <br> Лондон: ${londonTime} <br> Нью-Йорк: ${newYorkTime}`;
}

// Запуск обновления сразу при загрузке страницы
updateTime();

// Обновление каждые 15 секунд
// setInterval(updateTime, 15000);