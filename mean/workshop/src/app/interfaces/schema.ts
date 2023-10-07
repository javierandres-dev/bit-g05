export class Task {
  constructor(_id: string, name: string, completed: boolean) {
    this._id = _id;
    this.name = name;
    this.completed = completed;
  }
  _id?: string;
  name: string;
  completed: boolean;
}
