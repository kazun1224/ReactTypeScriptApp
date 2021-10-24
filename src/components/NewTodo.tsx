import React, { useRef } from "react";
import './NewTodo.css';

type NewTodoProps = {
  onAddtodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event:React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddtodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="from-control">
        <label htmlFor="todo-text">Todo内容</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">TODOの追加</button>
    </form>
  );
};

export default NewTodo;
