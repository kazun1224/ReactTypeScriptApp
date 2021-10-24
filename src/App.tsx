import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";
// function App() {
//   return (
//     <div className="App"></div>
//   );
// }

//React.FC=Reactのfunctioncomponentsの基本な型定義
const App: React.FC = () => {
  // todoの中身を定義
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  }

  return (
    // todoのコンポーネントを出力
    // propsでtodosをitemsとしてTodoListに渡す
    <div className="App">
      <NewTodo onAddtodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
