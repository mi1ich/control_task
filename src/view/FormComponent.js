export class FormComponent {
    constructor() {
      this.form = document.getElementById('habit-form');
    }
  
    bindAddHabit(handler) {
      this.form.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('habit-name').value;
        const description = document.getElementById('habit-description').value;
        const status = document.getElementById('habit-status').value;
        handler(name, description, status);
        this.form.reset();
      });
    }
  }