const schedule = ['Paulo','Carlinhos', 'Leny', 'Beto', 'Sergio', 'Ilson', 'Ediana', 'Eliana' ];

function updateSchedule() {
  const now = new Date();
  const currentPersonIndex = now.getDay();
  const currentPerson = schedule[currentPersonIndex];
  const nextPersonIndex = (currentPersonIndex + 1) % schedule.length;
  const nextPerson = schedule[nextPersonIndex];

  document.getElementById('current-person').textContent = currentPerson;
  document.getElementById('next-person').textContent = nextPerson;
}

function startUpdatingSchedule() {
  updateSchedule();
  setInterval(updateSchedule, 86400000); // Atualiza a cada 24 horas (86400000 milissegundos)
}

startUpdatingSchedule();



