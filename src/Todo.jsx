import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./redux/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo() {
    if (inputValue.trim()) {
      dispatch(addTodo({ id: Date.now(), text: inputValue }));
      setInputValue("");
    }
  }

  function handleRemoveTodo(id) {
    dispatch(removeTodo(id));
  }

  return (
    <>
      <div className="todo">
        <input
          type="text"
          placeholder="Введите задачу"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
