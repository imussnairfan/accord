import React, { useEffect, useState, useContext } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { Header } from '../components';
import { collection, getDocs, onSnapshot, snapShot, doc, updateDoc } from "firebase/firestore";
import { kanbanGrid } from '../data/dummy';
import {db} from '../../firebase';


const Accord_Board = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        const fetchedTasks = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }; // Include the id property
        });
        //console.log(fetchedTasks); // Check if tasks are fetched correctly
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks: ', error);
      }
    };
  
    fetchTasks();
  }, []);

  const handleTaskStatusUpdate = async (taskid, newStatus) => {
    console.log('taskid:', taskid);
    console.log('newStatus:', newStatus);
    try {
      // Update the task status in Firebase
      const taskRef = doc(db, 'tasks', taskid);
      await updateDoc(taskRef, { status: newStatus });
      console.log('Task status updated successfully in Firebase!');
  
      // Update the task status in the local server
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskid) {
          return { ...task, status: newStatus };
        }
        return task;
      });
      setTasks(updatedTasks);
      console.log('Task status updated successfully in local server!');
    } catch (error) {
      console.error('Error updating task status: ', error);
    }
  };  

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Accord Board" />
      <KanbanComponent
        id="kanban"
        keyField="status"
        dataSource={tasks}
        cardSettings={{ contentField: 'summary', headerField: 'taskid' }}
        actionComplete={(e) => {
          if (e.requestType === 'cardChanged') {
            console.log(e); // Log the args object to the console
            const taskid = e.changedRecords[0].id;
            const newStatus = e.changedRecords[0].status;
            handleTaskStatusUpdate(taskid, newStatus);
          }
        }}
      >
        <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Accord_Board;