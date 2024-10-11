const mysql = require('mysql2/promise');
const ChartJS = require('chartjs-node');

// Create a connection to the database
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'h39gj443Jf&',
  database: 'datchik'
});

// Connect to the database
db.execute('SELECT 1')
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Получите данные из таблицы sensor_data
const sensor_id = 1; // замените на actual sensor ID
db.execute('SELECT * FROM sensor_data WHERE sensor_id = ?', [sensor_id])
  .then((results) => {
    const data = results.map((row) => ({
      time: row.time,
      value: row.value
    }));

    // Создайте график
    const chart = new ChartJS({
      type: 'line',
      data: {
        labels: data.map((point) => point.time),
        datasets: [{
          label: 'Значение по времени',
          data: data.map((point) => point.value),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Сгенерируйте график как изображение
    const image = chart.toBuffer();

    // Сделайте что-то с сгенерированным изображением (например, сохраните его в файл)
    console.log('Сгенерированное изображение графика:', image);
  })
  .catch((err) => {
    console.error('Ошибка получения данных:', err);
  });