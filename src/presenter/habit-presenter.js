import { FormComponent } from '../view/FormComponent.js';
import { FilterComponent } from '../view/FilterComponent.js';
import { ListComponent } from '../view/ListComponent.js';

export class HabitPresenter {
  constructor(model) {
    this.model = model;
    this.formComponent = new FormComponent();
    this.filterComponent = new FilterComponent();
    this.listComponent = new ListComponent();

    this._initBindings();
    this.updateView('all');
  }

  _initBindings() {
    this.formComponent.bindAddHabit(this.handleAddHabit.bind(this));
    this.filterComponent.bindFilterHabits(this.handleFilterHabits.bind(this));
    this.listComponent.bindDeleteHabit(this.handleDeleteHabit.bind(this));
    this.listComponent.bindToggleStatus(this.handleToggleStatus.bind(this));
  }

  handleAddHabit(name, description, status) {
    this.model.addHabit(name, description, status);
    this.updateView('all');
  }

  handleDeleteHabit(id) {
    this.model.deleteHabit(id);
    this.updateView('all');
  }

  handleToggleStatus(id, status) {
    this.model.updateHabitStatus(id, status);
    this.updateView('all');
  }

  handleFilterHabits(status) {
    this.updateView(status);
  }

  updateView(status) {
    const habits = this.model.getHabitsByStatus(status);
    this.listComponent.displayHabits(habits);
  }
}