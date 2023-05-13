// Board.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './board.css';

const Board = () => {
  const [error, setError] = useState(false);
  const [taskid, setTaskNumber] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const handleTaskSubmit = async (e) => {
    e.preventDefault();

    try {
      const taskData = {
        taskid: taskid,
        title: title,
        summary: summary,
        status: 'Open' // Set the task status as "Open"
      };

      // Add the task data to the "tasks" collection
      const docRef = await addDoc(collection(db, 'tasks'), taskData);
      console.log('Task added with ID: ', docRef.id);

      // Clear the input fields
      setTaskNumber('');
      setTitle('');
      setSummary('');
      setError(false);
    } catch (error) {
      console.error('Error adding task: ', error);
      setError(true);
    }
  };

  const isFormValid = () => {
    return taskid.trim() !== '' && title.trim() !== '' && summary.trim() !== '';
  };

  return (
    <div className="board_container">
      <form className="formFlex" onSubmit={handleTaskSubmit}>
        <span className="heading_txt">Add Task</span>
        <table>
          <tr>
            <th>
              <label className='label'>Task</label>
            </th>
            <th>
            <input className="txtBox" type="text" placeholder="Task 69" value={taskid} onChange={(e) => setTaskNumber(e.target.value)} />
            </th>
          </tr>
          <tr>
            <th>
              <label className='label'>Title</label>
            </th>
            <th>
              <input className="txtBox" type="text" placeholder="Design low-fi navbar" value={title} onChange={(e) => setTitle(e.target.value)} />
            </th>
          </tr>
          <tr>
            <th>
              <label className='label'>Description</label>
            </th>
            <th>
            <input className="txtBox"  type="text" placeholder="Design a low-fi navigation bar of an android app" value={summary} onChange={(e) => setSummary(e.target.value)} />
            </th>
          </tr>
        </table>
        <button type="submit" className="submit_btn" disabled={!isFormValid()}>
          Add Task
        </button>
        {error && <span className="wrong_txt">Error Occurred</span>}
      </form>
    </div>
  );
};

export default Board;