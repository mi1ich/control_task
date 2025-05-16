export class HabitModel {
    constructor() {
      this.habits = JSON.parse(localStorage.getItem('habits')) || [];
    }
  
    addHabit(name, description, status) {
      const habit = { id: Date.now(), name, description, status };
      this.habits.push(habit);
      this._saveToLocalStorage();
      return habit;
    }
  
    deleteHabit(id) {
      this.habits = this.habits.filter(habit => habit.id !== id);
      this._saveToLocalStorage();
    }
  
    updateHabitStatus(id, status) {
      const habit = this.habits.find(habit => habit.id === id);
      if (habit) {
        habit.status = status;
        this._saveToLocalStorage();
      }
    }
  
    getHabitsByStatus(status) {
      if (status === 'all') return this.habits;
      return this.habits.filter(habit => habit.status === status);
    }
  
    _saveToLocalStorage() {
      localStorage.setItem('habits', JSON.stringify(this.habits));
    }
  }