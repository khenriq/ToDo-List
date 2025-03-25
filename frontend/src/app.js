import React from 'react';
import './index.css';
import TaskList from './tasks/TasksList';
import tasksData from './tasks/Tasks.data';

function App(){
    return (
        <div className='conteiner'>
            <TaskList tasks={tasksData}/>
        </div>
    );
}

export default App;