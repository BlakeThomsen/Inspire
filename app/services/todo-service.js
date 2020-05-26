import Todo from "../models/todo.js";
import store from "../store.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/blaket/todos/",
  timeout: 8000,
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi
      .get("")
      .then((res) => {
        let todo = res.data.data.map((p) => new Todo(p));
        console.log(res.data.data);
        store.commit("todos", todo);
      })
      .catch((e) => console.error(e));
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi
      .post("", todo)
      .then((res) => {
        this.getTodos();
      })
      .catch((e) => console.error(e));
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find((todo) => todo.id == todoId);
    if (todo) {
    }
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    todoApi
      .delete(todoId)
      .then((res) => {
        console.log(res.data);
        this.getTodos();
      })
      .catch((err) => console.error(err));
  }
}

const todoService = new TodoService();
export default todoService;
