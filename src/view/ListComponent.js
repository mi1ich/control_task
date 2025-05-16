export class ListComponent {
    constructor() {
      this.list = document.getElementById('habit-list');
    }
  
    displayHabits(habits) {
      this.list.innerHTML = habits.map(habit => `
        <div class="habit-item" data-id="${habit.id}">
          <div class="title">${habit.name}</div>
          <div class="description">${habit.description}</div>
          <div class="status">Статус: ${habit.status === 'active' ? 'Активна' : 'Завершена'}</div>
          <button class="delete-btn">Удалить</button>
          <button class="toggle-btn">${habit.status === 'active' ? 'Завершить' : 'Активировать'}</button>
        </div>
      `).join('');
    }
  
    bindDeleteHabit(handler) {
      this.list.addEventListener('click', event => {
        if (event.target.classList.contains('delete-btn')) {
          const id = parseInt(event.target.closest('.habit-item').dataset.id);
          handler(id);
        }
      });
    }
  
    bindToggleStatus(handler) {
      this.list.addEventListener('click', event => {
        if (event.target.classList.contains('toggle-btn')) {
          const id = parseInt(event.target.closest('.habit-item').dataset.id);
          const newStatus = event.target.textContent.includes('Завершить') ? 'completed' : 'active';
          handler(id, newStatus);
        }
      });
    }
  }