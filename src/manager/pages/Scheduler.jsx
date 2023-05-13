import React, { useState, useEffect } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Header } from '../components';
import { scheduleDataC } from '../data/dummy';
import { collection, doc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Scheduler = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventData = querySnapshot.docs.map((doc) => ({ ...doc.data(), Id: doc.id }));
      if (isMounted) {
        setScheduleData(eventData);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    console.log(scheduleData);
  }, [scheduleData]);

  const addEvent = async (event) => {
    const eventData = {
      Subject: event[0].Subject || '',
      StartTime: event[0].StartTime ? new Date(event[0].StartTime) : null,
      EndTime: event[0].EndTime ? new Date(event[0].EndTime) : null,
      Location: event[0].Location || '',
      Description: event[0].Description || '',
      IsAllDay: event[0].IsAllDay || false,
      RecurrenceRule: event[0].RecurrenceRule || null,
      StartTimezone: event[0].StartTimezone || null,
      EndTimezone: event[0].EndTimezone || null,
      // Add other properties with default values or conditional checks
    };
  
    console.log(eventData);
    await addDoc(collection(db, 'events'), eventData);
  };
   
  
  const editEvent = async (event) => {
    const eventRef = doc(db, 'events', event[0].Id);
    console.log(event[0]);
    console.log(eventRef);
  
    const updatedEvent = {
      Subject: event[0].Subject || '',
      StartTime: event[0].StartTime ? new Date(event[0].StartTime) : null,
      EndTime: event[0].EndTime ? new Date(event[0].EndTime) : null,
      Location: event[0].Location || '',
      Description: event[0].Description || '',
      IsAllDay: event[0].IsAllDay || false,
      RecurrenceRule: event[0].RecurrenceRule || null,
      StartTimezone: event[0].StartTimezone || null,
      EndTimezone: event[0].EndTimezone || null,
      // Add other properties with default values or conditional checks
    };
  
    await updateDoc(eventRef, updatedEvent);
  };
  
  
  const removeEvent = async (event) => {
    const eventRef = doc(db, 'events', event.Id);
    await deleteDoc(eventRef);
  };
  
  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  const currentDate = new Date();

  const handleActionComplete = (args) => {
    if (args.requestType === 'eventCreated') {
      addEvent(args.data);
    } else if (args.requestType === 'eventChanged') {
      editEvent(args.data);
    } else if (args.requestType === 'eventRemoved') {
      removeEvent(args.data);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Accord Scheduler" />
      <ScheduleComponent
        key={refreshKey}
        height="650px"
        selectedDate={currentDate}
        eventSettings={{ dataSource: scheduleDataC }}
        dragStart={onDragStart}
        actionComplete={handleActionComplete}
        refetchResourcesOnResize={true}
      >
        <ViewsDirective>
          {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;