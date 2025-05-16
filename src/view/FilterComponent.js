export class FilterComponent {
    constructor() {
      this.filter = document.getElementById('status-filter');
    }
  
    bindFilterHabits(handler) {
      this.filter.addEventListener('change', () => {
        handler(this.filter.value);
      });
    }
  }