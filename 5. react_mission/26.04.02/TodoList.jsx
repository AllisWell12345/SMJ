import { useState, useRef, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [lists, setLists] = useState([]);
  const inputRef = useRef();

  const AddTodo = () => {
    if (!todo.trim()) return;
    setLists([...lists, { id: Date.now(), text: todo, isDone: false }]);
    setTodo("");
  };

  const toggleTodo = (id) => {
    setLists(
      lists.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };

  const deleteList = (id) => {
    setLists(lists.filter((item) => item.id !== id));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [lists]);

  return (
    <div>
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={AddTodo}>추가</button>

      {lists.map((item) => (
        <div key={item.id}>
          <input type="checkbox" onClick={() => toggleTodo(item.id)} />
          {item.isDone ? <s>{item.text}</s> : item.text}
          <button onClick={() => deleteList(item.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}
