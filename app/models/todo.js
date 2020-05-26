export default class Todo {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.task = data.task;
  }
  get todoTemplate() {
    return `<div class="card">
    <div class="card-header">
      ${this.title}
    </div>
    <div class="card-body">
      <h5 class="card-title">${this.task}</h5>
    </div>
  </div>`;
  }
}
