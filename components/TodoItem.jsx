export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer flex-grow ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.task}
      </span>
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`px-3 py-1 rounded text-sm ${
          todo.completed ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
        }`}
      >
        {todo.completed ? "Completed" : "Pending"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-2 text-red-500 hover:text-red-700"
      >
        ✖
      </button>
    </li>
  );
}
