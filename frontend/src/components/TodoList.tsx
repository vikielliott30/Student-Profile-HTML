import React from 'react';

function TodoList() {
  const [elements, setElements] = React.useState<string[]>([]);
  const [task, setTask] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (task.trim() === '') return;

    setElements(prev => [...prev, task]);
    setTask('');

    console.log('Tareas guardadas:', elements);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {elements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
