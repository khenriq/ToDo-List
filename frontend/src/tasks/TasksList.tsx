import React from 'react';
import tasks from './Tasks.data';  

const TasksList = () => {
  return (
    <div className="conteiner">
      <header>
        <h1 className="titulo">TO DO List App</h1>
      </header>
      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="itens-lista">
              <i className='bx bx-list-check'></i>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default TasksList;
