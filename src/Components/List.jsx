import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;
function List() {
  const [todos, setTodos] = useState([]);
  const handleAddItem = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    setTodos([...todos, newItem]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <AddItem handleAddItem={handleAddItem} />
      <ul>
        {todos.map((item) => (
          <AddItem
            key={item.id}
            handleDelete={() => handleDelete(item.id)}
            title={item.title}
            status={item.status}
          />
        ))}
      </ul>
    </div>
  );
}
export default List;
