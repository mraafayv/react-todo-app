import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
        <div className="flex justify-center mb-4">
          <button
            className={`mx-2 px-4 py-2 rounded hover:cursor-pointer ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded hover:cursor-pointer ${filter === "completed" ? "bg-green-500 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded hover:cursor-pointer ${filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
        </div>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        <div className="mt-4 text-center text-sm text-gray-600">
          {todos.length === 0 ? "No tasks available" : `${todos.filter(todo => !todo.completed).length} Pending, ${todos.filter(todo => todo.completed).length} Completed`}
        </div>
      </div>
    </div>
  );
}
