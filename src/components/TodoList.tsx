import React from "react";
import './TodoList.css';

// App.tsxからpropsで渡ってきたitemsの型を定義
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

// itemsをlistとして表示するコンポーネントを定義
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
