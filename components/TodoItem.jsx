export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
      <li className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
        <span
          onClick={() => toggleTodo(todo.id)}
          className={`cursor-pointer ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.task}
        </span>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          ✖
        </button>
      </li>
    );
  }
  