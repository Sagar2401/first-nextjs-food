export interface Todo {
  _id: string;
  completed: boolean;
  title: string;
  description: string;
}

export interface Todos {
  todos: Todo[];
}
